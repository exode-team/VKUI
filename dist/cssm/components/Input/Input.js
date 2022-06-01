import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["type", "align", "getRef", "className", "getRootRef", "sizeY", "style", "before", "after", "onInput", "value"];
import { createScopedElement } from "../../lib/jsxRuntime";
import { useEffect, useRef, useState } from 'react';
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { FormField } from "../FormField/FormField";
import { withAdaptivity } from "../../hoc/withAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
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
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      cursor = _useState2[0],
      setCursor = _useState2[1];

  var ref = useRef(null);
  useEffect(function () {
    var input = ref.current;
    if (input) input.setSelectionRange(cursor, cursor);
  }, [ref, cursor, value]);

  var handleChange = function handleChange(e) {
    e.target.selectionStart && setCursor(e.target.selectionStart);
    onInput && onInput(e);
  };

  var platform = usePlatform();
  return createScopedElement(FormField, {
    vkuiClass: classNames(getClassName("Input", platform), !!align && "Input--".concat(align), "Input--sizeY-".concat(sizeY)),
    style: style,
    className: className,
    getRootRef: getRootRef,
    before: before,
    after: after,
    disabled: restProps.disabled
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
//# sourceMappingURL=Input.js.map