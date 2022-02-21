"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsxRuntime = require("../../lib/jsxRuntime");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("react");

var _getClassName = require("../../helpers/getClassName");

var _classNames2 = require("../../lib/classNames");

var _FormField = require("../FormField/FormField");

var _withAdaptivity = require("../../hoc/withAdaptivity");

var _usePlatform = require("../../hooks/usePlatform");

var _excluded = ["align", "getRef", "className", "getRootRef", "sizeY", "style", "after", "onInput", "value"];

var Input = function Input(_ref) {
  var align = _ref.align,
      getRef = _ref.getRef,
      className = _ref.className,
      getRootRef = _ref.getRootRef,
      sizeY = _ref.sizeY,
      style = _ref.style,
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
    vkuiClass: (0, _classNames2.classNames)((0, _getClassName.getClassName)("Input", platform), (0, _defineProperty2.default)({}, "Input--".concat(align), !!align), "Input--sizeY-".concat(sizeY)),
    style: style,
    className: className,
    getRootRef: getRootRef,
    after: after,
    disabled: restProps.disabled
  }, (0, _jsxRuntime.createScopedElement)("input", (0, _extends2.default)({}, restProps, {
    onInput: handleChange,
    value: value,
    vkuiClass: "Input__el",
    ref: ref || getRef
  })));
};

Input.defaultProps = {
  type: "text"
}; // eslint-disable-next-line import/no-default-export

var _default = (0, _withAdaptivity.withAdaptivity)(Input, {
  sizeY: true
});

exports.default = _default;
//# sourceMappingURL=Input.js.map