"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTimeEqual = exports.navigateDate = exports.isLastDay = exports.isFirstDay = exports.getYears = exports.getWeeks = exports.getMonths = exports.getDaysNames = void 0;
var _dayjs = _interopRequireDefault(require("dayjs"));
var _date = require("./date");
var getYears = function getYears(currentYear, range) {
  var years = [];
  for (var i = currentYear - range; i <= currentYear + range; i++) {
    years.push({
      label: String(i).padStart(4, "0"),
      value: i
    });
  }
  return years;
};
exports.getYears = getYears;
var getMonths = function getMonths(locale) {
  var months = [];
  var dayjsLocale = locale || "ru";

  // Use dayjs for all formatting
  for (var i = 0; i < 12; i++) {
    var date = (0, _dayjs.default)().month(i).locale(dayjsLocale);
    months.push({
      label: date.format("MMMM"),
      value: i
    });
  }
  return months;
};
exports.getMonths = getMonths;
var getDaysNames = function getDaysNames(now, weekStartsOn, locale) {
  var dayjsLocale = locale || "ru";
  var days = (0, _date.eachDayOfInterval)((0, _date.startOfWeek)(now, weekStartsOn), (0, _date.endOfWeek)(now, weekStartsOn));

  // Use dayjs for all formatting
  return days.map(function (day) {
    return (0, _dayjs.default)(day).locale(dayjsLocale).format("ddd");
  });
};
exports.getDaysNames = getDaysNames;
var navigateDate = function navigateDate(date, key) {
  var newDate = date !== null && date !== void 0 ? date : new Date();
  switch (key) {
    case "ArrowRight":
      newDate = (0, _date.addDays)(newDate, 1);
      break;
    case "ArrowLeft":
      newDate = (0, _date.subDays)(newDate, 1);
      break;
    case "ArrowUp":
      newDate = (0, _date.subWeeks)(newDate, 1);
      break;
    case "ArrowDown":
      newDate = (0, _date.addWeeks)(newDate, 1);
      break;
  }
  return newDate;
};
exports.navigateDate = navigateDate;
var getWeeks = function getWeeks(viewDate, weekStartsOn) {
  var start = (0, _date.startOfWeek)((0, _date.startOfMonth)(viewDate), weekStartsOn);
  var end = (0, _date.endOfWeek)((0, _date.endOfMonth)(viewDate), weekStartsOn);
  var count = 0;
  var current = start;
  var nestedWeeks = [];
  var lastDay = null;
  while ((0, _date.isBefore)(current, end)) {
    var weekNumber = Math.floor(count / 7);
    nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
    var day = current.getDay();
    if (lastDay !== day) {
      lastDay = day;
      nestedWeeks[weekNumber].push(current);
      count += 1;
    }
    current = (0, _date.addDays)(current, 1);
  }
  return nestedWeeks;
};
exports.getWeeks = getWeeks;
var setTimeEqual = function setTimeEqual(to, from) {
  if (from) {
    to.setHours(from.getHours());
    to.setMinutes(from.getMinutes());
    to.setSeconds(from.getSeconds());
    to.setMilliseconds(from.getMilliseconds());
  }
  return to;
};
exports.setTimeEqual = setTimeEqual;
var isFirstDay = function isFirstDay(day, dayOfWeek) {
  return dayOfWeek === 0 || (0, _date.isFirstDayOfMonth)(day);
};
exports.isFirstDay = isFirstDay;
var isLastDay = function isLastDay(day, dayOfWeek) {
  return dayOfWeek === 6 || (0, _date.isLastDayOfMonth)(day);
};
exports.isLastDay = isLastDay;
//# sourceMappingURL=calendar.js.map