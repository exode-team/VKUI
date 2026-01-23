import dayjs from "dayjs";
import { eachDayOfInterval, startOfWeek, endOfWeek, addDays, subDays, subWeeks, addWeeks, startOfMonth, endOfMonth, isBefore, isFirstDayOfMonth, isLastDayOfMonth } from "./date";
export var getYears = function getYears(currentYear, range) {
  var years = [];
  for (var i = currentYear - range; i <= currentYear + range; i++) {
    years.push({
      label: String(i).padStart(4, "0"),
      value: i
    });
  }
  return years;
};
export var getMonths = function getMonths(locale) {
  var months = [];
  var dayjsLocale = locale || "ru";

  // Use dayjs for all formatting
  for (var i = 0; i < 12; i++) {
    var date = dayjs().month(i).locale(dayjsLocale);
    months.push({
      label: date.format("MMMM"),
      value: i
    });
  }
  return months;
};
export var getDaysNames = function getDaysNames(now, weekStartsOn, locale) {
  var dayjsLocale = locale || "ru";
  var days = eachDayOfInterval(startOfWeek(now, weekStartsOn), endOfWeek(now, weekStartsOn));

  // Use dayjs for all formatting
  return days.map(function (day) {
    return dayjs(day).locale(dayjsLocale).format("ddd");
  });
};
export var navigateDate = function navigateDate(date, key) {
  var newDate = date !== null && date !== void 0 ? date : new Date();
  switch (key) {
    case "ArrowRight":
      newDate = addDays(newDate, 1);
      break;
    case "ArrowLeft":
      newDate = subDays(newDate, 1);
      break;
    case "ArrowUp":
      newDate = subWeeks(newDate, 1);
      break;
    case "ArrowDown":
      newDate = addWeeks(newDate, 1);
      break;
  }
  return newDate;
};
export var getWeeks = function getWeeks(viewDate, weekStartsOn) {
  var start = startOfWeek(startOfMonth(viewDate), weekStartsOn);
  var end = endOfWeek(endOfMonth(viewDate), weekStartsOn);
  var count = 0;
  var current = start;
  var nestedWeeks = [];
  var lastDay = null;
  while (isBefore(current, end)) {
    var weekNumber = Math.floor(count / 7);
    nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
    var day = current.getDay();
    if (lastDay !== day) {
      lastDay = day;
      nestedWeeks[weekNumber].push(current);
      count += 1;
    }
    current = addDays(current, 1);
  }
  return nestedWeeks;
};
export var setTimeEqual = function setTimeEqual(to, from) {
  if (from) {
    to.setHours(from.getHours());
    to.setMinutes(from.getMinutes());
    to.setSeconds(from.getSeconds());
    to.setMilliseconds(from.getMilliseconds());
  }
  return to;
};
export var isFirstDay = function isFirstDay(day, dayOfWeek) {
  return dayOfWeek === 0 || isFirstDayOfMonth(day);
};
export var isLastDay = function isLastDay(day, dayOfWeek) {
  return dayOfWeek === 6 || isLastDayOfMonth(day);
};
//# sourceMappingURL=calendar.js.map