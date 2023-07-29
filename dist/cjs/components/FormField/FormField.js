"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormFieldMode = exports.FormField = void 0;
var _jsxRuntime = require("../../lib/jsxRuntime");
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var React = _interopRequireWildcard(require("react"));
var _classNames = require("../../lib/classNames");
var _useAdaptivity2 = require("../../hooks/useAdaptivity");
var _excluded = ["Component", "status", "children", "getRootRef", "before", "after", "disabled", "mode"];
var FormFieldMode = {
  default: "default",
  plain: "plain"
};
exports.FormFieldMode = FormFieldMode;
/**
 * @see https://vkcom.github.io/VKUI/#/FormField
 */
var FormField = function FormField(_ref) {
  var _ref$Component = _ref.Component,
    Component = _ref$Component === void 0 ? "div" : _ref$Component,
    _ref$status = _ref.status,
    status = _ref$status === void 0 ? "default" : _ref$status,
    children = _ref.children,
    getRootRef = _ref.getRootRef,
    before = _ref.before,
    after = _ref.after,
    disabled = _ref.disabled,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? FormFieldMode.default : _ref$mode,
    restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useAdaptivity = (0, _useAdaptivity2.useAdaptivity)(),
    sizeY = _useAdaptivity.sizeY;
  var _React$useState = React.useState(false),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    hover = _React$useState2[0],
    setHover = _React$useState2[1];
  var handleMouseEnter = function handleMouseEnter(e) {
    e.stopPropagation();
    setHover(true);
  };
  var handleMouseLeave = function handleMouseLeave(e) {
    e.stopPropagation();
    setHover(false);
  };
  return (0, _jsxRuntime.createScopedElement)(Component, (0, _extends2.default)({
    role: "presentation"
  }, restProps, {
    ref: getRootRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    vkuiClass: (0, _classNames.classNames)("FormField", "FormField--".concat(mode), "FormField--status-".concat(status), "FormField--sizeY-".concat(sizeY),
    // TODO v5.0.0 поправить под новую адаптивность
    disabled && "FormField--disabled", !disabled && hover && "FormField--hover")
  }), before && (0, _jsxRuntime.createScopedElement)("div", {
    role: "presentation",
    vkuiClass: "FormField__before"
  }, before), children, after && (0, _jsxRuntime.createScopedElement)("div", {
    role: "presentation",
    vkuiClass: "FormField__after"
  }, after), (0, _jsxRuntime.createScopedElement)("div", {
    role: "presentation",
    vkuiClass: "FormField__border"
  }));
};
exports.FormField = FormField;
//# sourceMappingURL=FormField.js.map