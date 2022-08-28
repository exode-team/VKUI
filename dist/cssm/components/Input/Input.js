import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["type", "align", "getRef", "className", "getRootRef", "sizeY", "style", "before", "after", "onInput", "value", "caretPosition", "alwaysInFocus", "isFocus", "status"];
import { createScopedElement } from "../../lib/jsxRuntime";
import { useRef, useEffect } from 'react';
import { classNames } from "../../lib/classNames";
import { FormField } from "../FormField/FormField";
import { withAdaptivity } from "../../hoc/withAdaptivity";
import "./Input.css";

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
      status = _ref.status,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var ref = useRef(null);

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


  useEffect(function () {
    var _ref$current, _ref$current2;

    isFocus && ((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.focus());
    caretPosition && ((_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.setSelectionRange(caretPosition, caretPosition));
  }, []);
  return createScopedElement(FormField, {
    vkuiClass: classNames("Input", !!align && "Input--".concat(align), "Input--sizeY-".concat(sizeY), // TODO v5.0.0 поправить под новую адаптивность
    before && "Input--hasBefore", after && "Input--hasAfter"),
    style: style,
    className: className,
    getRootRef: getRootRef,
    before: before,
    after: after,
    disabled: restProps.disabled,
    status: status
  }, createScopedElement("input", _extends({}, restProps, {
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


export var Input = withAdaptivity(InputComponent, {
  sizeY: true
});
Input.displayName = "Input";
//# sourceMappingURL=Input.js.map