"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = void 0;
var _jsxRuntime = require("../../lib/jsxRuntime");
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var React = _interopRequireWildcard(require("react"));
var _classNames = require("../../lib/classNames");
var _withPlatform = require("../../hoc/withPlatform");
var _icons = require("@vkontakte/icons");
var _platform = require("../../lib/platform");
var _Touch = require("../Touch/Touch");
var _utils = require("../../lib/utils");
var _Text = require("../Typography/Text/Text");
var _Title = require("../Typography/Title/Title");
var _Headline = require("../Typography/Headline/Headline");
var _Separator = require("../Separator/Separator");
var _useExternRef = require("../../hooks/useExternRef");
var _useEnsuredControl3 = require("../../hooks/useEnsuredControl");
var _useAdaptivity2 = require("../../hooks/useAdaptivity");
var _excluded = ["platform", "children"],
  _excluded2 = ["before", "className", "defaultValue", "placeholder", "after", "getRef", "platform", "icon", "onIconClick", "style", "autoComplete"];
var SearchPlaceholderTypography = function SearchPlaceholderTypography(_ref) {
  var platform = _ref.platform,
    children = _ref.children,
    restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  switch (platform) {
    case _platform.IOS:
      return (0, _jsxRuntime.createScopedElement)(_Title.Title, (0, _extends2.default)({}, restProps, {
        level: "3",
        weight: "3"
      }), children);
    case _platform.VKCOM:
      return (0, _jsxRuntime.createScopedElement)(_Text.Text, restProps, children);
    case _platform.ANDROID:
    default:
      return (0, _jsxRuntime.createScopedElement)(_Headline.Headline, (0, _extends2.default)({}, restProps, {
        weight: "3"
      }), children);
  }
};
/**
 * @see https://vkcom.github.io/VKUI/#/Search
 */
var SearchComponent = function SearchComponent(_ref2) {
  var _ref2$before = _ref2.before,
    before = _ref2$before === void 0 ? (0, _jsxRuntime.createScopedElement)(_icons.Icon16SearchOutline, {
      "aria-hidden": true
    }) : _ref2$before,
    className = _ref2.className,
    _ref2$defaultValue = _ref2.defaultValue,
    defaultValue = _ref2$defaultValue === void 0 ? "" : _ref2$defaultValue,
    _ref2$placeholder = _ref2.placeholder,
    placeholder = _ref2$placeholder === void 0 ? "Поиск" : _ref2$placeholder,
    _ref2$after = _ref2.after,
    after = _ref2$after === void 0 ? "Отмена" : _ref2$after,
    getRef = _ref2.getRef,
    platform = _ref2.platform,
    icon = _ref2.icon,
    _ref2$onIconClick = _ref2.onIconClick,
    onIconClick = _ref2$onIconClick === void 0 ? _utils.noop : _ref2$onIconClick,
    style = _ref2.style,
    _ref2$autoComplete = _ref2.autoComplete,
    autoComplete = _ref2$autoComplete === void 0 ? "off" : _ref2$autoComplete,
    inputProps = (0, _objectWithoutProperties2.default)(_ref2, _excluded2);
  var inputRef = (0, _useExternRef.useExternRef)(getRef);
  var _React$useState = React.useState(false),
    _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
    isFocused = _React$useState2[0],
    setFocused = _React$useState2[1];
  var _useEnsuredControl = (0, _useEnsuredControl3.useEnsuredControl)(inputProps, {
      defaultValue: defaultValue
    }),
    _useEnsuredControl2 = (0, _slicedToArray2.default)(_useEnsuredControl, 2),
    value = _useEnsuredControl2[0],
    onChange = _useEnsuredControl2[1];
  var _useAdaptivity = (0, _useAdaptivity2.useAdaptivity)(),
    sizeY = _useAdaptivity.sizeY;
  var onFocus = function onFocus(e) {
    setFocused(true);
    inputProps.onFocus && inputProps.onFocus(e);
  };
  var onBlur = function onBlur(e) {
    setFocused(false);
    inputProps.onBlur && inputProps.onBlur(e);
  };
  var onCancel = React.useCallback(function () {
    var _Object$getOwnPropert, _inputRef$current;
    // eslint-disable-next-line @typescript-eslint/unbound-method
    var nativeInputValueSetter = (_Object$getOwnPropert = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")) === null || _Object$getOwnPropert === void 0 ? void 0 : _Object$getOwnPropert.set;
    nativeInputValueSetter === null || nativeInputValueSetter === void 0 ? void 0 : nativeInputValueSetter.call(inputRef.current, "");
    var ev2 = new Event("input", {
      bubbles: true
    });
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.dispatchEvent(ev2);
  }, [inputRef]);
  var onIconClickStart = React.useCallback(function (e) {
    return onIconClick(e.originalEvent);
  }, [onIconClick]);
  var onIconCancelClickStart = React.useCallback(function (e) {
    var _inputRef$current2;
    e.originalEvent.preventDefault();
    (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.focus();
    onCancel();
  }, [inputRef, onCancel]);
  return (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: (0, _classNames.classNames)("Search", platform === _platform.VKCOM && "Search--vkcom", platform === _platform.IOS && "Search--ios", // TODO: V5 перенести на новую адаптивность
    "Search--sizeY-".concat(sizeY), isFocused && "Search--focused", value && "Search--has-value", icon && "Search--has-after", after && "Search--has-icon"),
    className: className,
    style: style
  }, (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "Search__in"
  }, (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "Search__width"
  }), (0, _jsxRuntime.createScopedElement)("label", {
    vkuiClass: "Search__control"
  }, (0, _jsxRuntime.createScopedElement)("input", (0, _extends2.default)({
    type: "search"
  }, inputProps, {
    autoComplete: autoComplete,
    ref: inputRef,
    vkuiClass: "Search__input",
    onFocus: onFocus,
    onBlur: onBlur,
    onChange: onChange,
    value: value
  })), platform === _platform.IOS && after && (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "Search__after-width"
  }, after), (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "Search__placeholder"
  }, (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "Search__placeholder-in"
  }, before, (0, _jsxRuntime.createScopedElement)(SearchPlaceholderTypography, {
    vkuiClass: "Search__placeholder-text",
    platform: platform
  }, placeholder)), isFocused && platform === _platform.IOS && after && (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "Search__after-width"
  }, after))), (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "Search__after"
  }, (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "Search__icons"
  }, icon && (0, _jsxRuntime.createScopedElement)(_Touch.Touch, {
    onStart: onIconClickStart,
    vkuiClass: "Search__icon"
  }, icon), !!value && (0, _jsxRuntime.createScopedElement)(_Touch.Touch, {
    onStart: onIconCancelClickStart,
    onClick: onCancel,
    vkuiClass: "Search__icon"
  }, platform === _platform.IOS ? (0, _jsxRuntime.createScopedElement)(_icons.Icon16Clear, null) : (0, _jsxRuntime.createScopedElement)(_icons.Icon24Cancel, null))), platform === _platform.IOS && after && (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "Search__after-in",
    onClick: onCancel
  }, after))), platform === _platform.VKCOM && (0, _jsxRuntime.createScopedElement)(_Separator.Separator, {
    vkuiClass: "Search__separator",
    wide: true
  }));
};
var Search = (0, _withPlatform.withPlatform)(SearchComponent);
exports.Search = Search;
Search.displayName = "Search";
//# sourceMappingURL=Search.js.map