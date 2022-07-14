"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _jsxRuntime = require("../../lib/jsxRuntime");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = require("react");

var _getClassName = require("../../helpers/getClassName");

var _classNames = require("../../lib/classNames");

var _FormField = require("../FormField/FormField");

var _withAdaptivity = require("../../hoc/withAdaptivity");

var _usePlatform = require("../../hooks/usePlatform");

var _excluded = ["type", "align", "getRef", "className", "getRootRef", "sizeY", "style", "before", "after", "onInput", "value", "caretPosition", "alwaysInFocus", "isFocus"];

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
      caretPosition = _ref.caretPosition,
      alwaysInFocus = _ref.alwaysInFocus,
      _ref$isFocus = _ref.isFocus,
      isFocus = _ref$isFocus === void 0 ? false : _ref$isFocus,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var platform = (0, _usePlatform.usePlatform)();
  var ref = (0, _react.useRef)(null);

  var handleChange = function handleChange(e) {
    var caret = e.target.selectionStart;
    var element = e.target;
    window.requestAnimationFrame(function () {
      element.selectionStart = caret;
      element.selectionEnd = caret;
    });
    onInput && onInput(e);
  }; //to enable always in focus uncomment
  // const handleBlur = () => ref.current?.focus();


  (0, _react.useEffect)(function () {
    var _ref$current, _ref$current2;

    isFocus && ((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus());
    caretPosition && ((_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.setSelectionRange(caretPosition, caretPosition));
  }, []);
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