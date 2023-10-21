import _typeof from "@babel/runtime/helpers/typeof";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["disabled", "value", "label"],
  _excluded2 = ["style", "className", "getRootRef", "value", "onChange", "onInputChange", "onKeyDown", "onBlur", "setOnBlur", "addOptionEventKeys", "onFocus", "children", "inputValue", "getRef", "placeholder", "getOptionValue", "getOptionLabel", "getNewOptionData", "renderChip", "inputAriaLabel"];
import { createScopedElement } from "../../lib/jsxRuntime";
import * as React from "react";
import { classNames } from "../../lib/classNames";
import { Chip } from "../Chip/Chip";
import { noop } from "../../lib/utils";
import { useChipsInput } from "../../hooks/useChipsInput";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { prefixClass } from "../../lib/prefixClass";
import { useExternRef } from "../../hooks/useExternRef";
import "./ChipsInputBase.css";
export var chipsInputDefaultProps = {
  onChange: noop,
  onInputChange: noop,
  onKeyDown: noop,
  onBlur: noop,
  setOnBlur: false,
  addOptionEventKeys: ['Enter'],
  onFocus: noop,
  value: [],
  inputValue: "",
  inputAriaLabel: "Введите ваше значение...",
  getOptionValue: function getOptionValue(option) {
    return option.value;
  },
  getOptionLabel: function getOptionLabel(option) {
    return option.label;
  },
  getNewOptionData: function getNewOptionData(_, label) {
    return {
      value: label,
      label: label
    };
  },
  renderChip: function renderChip(props) {
    if (!props) {
      return null;
    }
    var disabled = props.disabled,
      value = props.value,
      label = props.label,
      rest = _objectWithoutProperties(props, _excluded);
    return createScopedElement(Chip, _extends({
      value: value,
      removable: !disabled
    }, rest), label);
  }
};
export var ChipsInputBase = function ChipsInputBase(props) {
  var propsWithDefault = _objectSpread(_objectSpread({}, chipsInputDefaultProps), props);
  var style = propsWithDefault.style,
    className = propsWithDefault.className,
    getRootRef = propsWithDefault.getRootRef,
    value = propsWithDefault.value,
    onChange = propsWithDefault.onChange,
    onInputChange = propsWithDefault.onInputChange,
    onKeyDown = propsWithDefault.onKeyDown,
    onBlur = propsWithDefault.onBlur,
    setOnBlur = propsWithDefault.setOnBlur,
    addOptionEventKeys = propsWithDefault.addOptionEventKeys,
    onFocus = propsWithDefault.onFocus,
    children = propsWithDefault.children,
    inputValue = propsWithDefault.inputValue,
    getRef = propsWithDefault.getRef,
    placeholder = propsWithDefault.placeholder,
    getOptionValue = propsWithDefault.getOptionValue,
    getOptionLabel = propsWithDefault.getOptionLabel,
    getNewOptionData = propsWithDefault.getNewOptionData,
    renderChip = propsWithDefault.renderChip,
    inputAriaLabel = propsWithDefault.inputAriaLabel,
    restProps = _objectWithoutProperties(propsWithDefault, _excluded2);
  var _useAdaptivity = useAdaptivity(),
    sizeY = _useAdaptivity.sizeY;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    focused = _React$useState2[0],
    setFocused = _React$useState2[1];
  var _useChipsInput = useChipsInput(propsWithDefault),
    fieldValue = _useChipsInput.fieldValue,
    addOptionFromInput = _useChipsInput.addOptionFromInput,
    removeOption = _useChipsInput.removeOption,
    selectedOptions = _useChipsInput.selectedOptions,
    handleInputChange = _useChipsInput.handleInputChange;
  var inputRef = useExternRef(getRef);
  var isDisabled = restProps.disabled || restProps.readOnly;
  var handleKeyDown = function handleKeyDown(e) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    onKeyDown(e);
    if (e.key === "Backspace" && !e.defaultPrevented && !fieldValue && selectedOptions.length) {
      removeOption(getOptionValue(selectedOptions[selectedOptions.length - 1]));
      e.preventDefault();
    }
    if (addOptionEventKeys !== null && addOptionEventKeys !== void 0 && addOptionEventKeys.includes(e.key) && !e.defaultPrevented && fieldValue) {
      addOptionFromInput();
      e.preventDefault();
    }
  };
  var handleBlur = function handleBlur(e) {
    if (focused) {
      setFocused(false);
    }
    onBlur(e);
    if (setOnBlur && fieldValue) {
      addOptionFromInput();
    }
  };
  var handleFocus = function handleFocus(e) {
    if (!focused) {
      setFocused(true);
    }
    onFocus(e);
  };
  var handleChipRemove = function handleChipRemove(_, value) {
    if (value !== undefined) {
      removeOption(value);
    }
  };
  var handleClick = function handleClick(e) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    if ((inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) !== null && !focused) {
      inputRef.current.focus();
    }
  };
  return createScopedElement("div", {
    vkuiClass: classNames("ChipsInputBase", "ChipsInputBase--sizeY-".concat(sizeY)),
    onClick: handleClick,
    role: "presentation",
    style: style,
    className: className,
    ref: getRootRef
  }, selectedOptions.map(function (option) {
    var value = getOptionValue(option);
    var label = getOptionLabel(option);
    return createScopedElement(React.Fragment, {
      key: "".concat(_typeof(value), "-").concat(value)
    }, renderChip({
      option: option,
      value: value,
      label: label,
      onRemove: handleChipRemove,
      disabled: Boolean(restProps.disabled),
      className: prefixClass("ChipsInputBase__chip")
    }));
  }), createScopedElement("label", {
    vkuiClass: "ChipsInputBase__label",
    "aria-label": inputAriaLabel
  }, createScopedElement("input", _extends({
    type: "text",
    autoCapitalize: "none",
    autoComplete: "off",
    autoCorrect: "off",
    spellCheck: false,
    "aria-autocomplete": "list",
    vkuiClass: "ChipsInputBase__el"
  }, restProps, {
    ref: inputRef,
    value: fieldValue,
    onChange: handleInputChange,
    onKeyDown: handleKeyDown,
    onFocus: handleFocus,
    onBlur: handleBlur,
    placeholder: selectedOptions.length ? undefined : placeholder
  }))));
};
//# sourceMappingURL=ChipsInputBase.js.map