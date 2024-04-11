"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;
var _jsxRuntime = require("../../../lib/jsxRuntime");
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classNames = require("../../../lib/classNames");
var _warnOnce = require("../../../lib/warnOnce");
var _excluded = ["children", "weight", "level", "Component"];
var warn = (0, _warnOnce.warnOnce)("Title");

/**
 * @see https://vkcom.github.io/VKUI/#/Title
 */
var Title = function Title(_ref) {
  var children = _ref.children,
    weight = _ref.weight,
    _ref$level = _ref.level,
    level = _ref$level === void 0 ? "3" : _ref$level,
    Component = _ref.Component,
    restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  if (!Component) {
    Component = "h" + level;
  }
  if (process.env.NODE_ENV === "development") {
    if (weight && ["heavy", "bold", "semibold", "medium", "regular"].includes(weight)) warn("\u041D\u0430\u0447\u0435\u0440\u0442\u0430\u043D\u0438\u0435 weight=\"".concat(weight, "\" \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u043E \u0438 \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u043E \u0432 5.0.0. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \"1\", \"2\" \u0438 \"3\""));
  }
  return (0, _jsxRuntime.createScopedElement)(Component, (0, _extends2.default)({}, restProps, {
    vkuiClass: (0, _classNames.classNames)("Title", "Title--l-".concat(level), weight && "Title--w-".concat(weight))
  }), children);
};
exports.Title = Title;
//# sourceMappingURL=Title.js.map