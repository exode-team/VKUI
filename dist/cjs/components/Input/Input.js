"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _jsxRuntime = require("../../lib/jsxRuntime");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("react");

var _getClassName = require("../../helpers/getClassName");

var _classNames = require("../../lib/classNames");

var _FormField = require("../FormField/FormField");

var _withAdaptivity = require("../../hoc/withAdaptivity");

var _usePlatform = require("../../hooks/usePlatform");

var _excluded = ["type", "align", "getRef", "className", "getRootRef", "sizeY", "style", "before", "after", "onInput", "value"];

var InputComponent = function InputComponent(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      align = _ref.align,
      getRef = _ref.getRef,
      className = _ref.className,
      getRootRef = _ref.getRootRef,
      sizeY = _ref.sizeY,
      style = _ref.style,
      before = _ref.before,
      after = _ref.after,
      onInput = _ref.onInput,
      value = _ref.value,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      cursor = _useState2[0],
      setCursor = _useState2[1];

  var ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var input = ref.current;
    if (input) input.setSelectionRange(cursor, cursor);
  }, [ref, cursor, value]);

  var handleChange = function handleChange(e) {
    e.target.selectionStart && setCursor(e.target.selectionStart);
    onInput && onInput(e);
  };

  var platform = (0, _usePlatform.usePlatform)();
  return (0, _jsxRuntime.createScopedElement)(_FormField.FormField, {
    vkuiClass: (0, _classNames.classNames)((0, _getClassName.getClassName)("Input", platform), !!align && "Input--".concat(align), "Input--sizeY-".concat(sizeY)),
    style: style,
    className: className,
    getRootRef: getRootRef,
    before: before,
    after: after,
    disabled: restProps.disabled
  }, (0, _jsxRuntime.createScopedElement)("input", (0, _extends2.default)({}, restProps, {
    type: type,
    onInput: handleChange,
    value: value,
    vkuiClass: "Input__el",
    ref: ref || getRef
  })));
};
/**
 * @see https://vkcom.github.io/VKUI/#/Input
 */


var Input = (0, _withAdaptivity.withAdaptivity)(InputComponent, {
  sizeY: true
});
exports.Input = Input;
//# sourceMappingURL=Input.js.map