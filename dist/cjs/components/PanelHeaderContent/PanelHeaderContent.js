"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelHeaderContent = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _jsxRuntime = require("../../lib/jsxRuntime");
var _classNames = require("../../lib/classNames");
var _Tappable = require("../Tappable/Tappable");
var _usePlatform = require("../../hooks/usePlatform");
var _utils = require("../../lib/utils");
var _getClassName = require("../../helpers/getClassName");
var _Caption = require("../Typography/Caption/Caption");
var _Headline = require("../Typography/Headline/Headline");
var _platform = require("../../lib/platform");
var _Text = require("../Typography/Text/Text");
var _excluded = ["className", "style", "aside", "status", "before", "children", "onClick"];
var PanelHeaderChildren = function PanelHeaderChildren(_ref) {
  var platform = _ref.platform,
    hasStatus = _ref.hasStatus,
    hasBefore = _ref.hasBefore,
    children = _ref.children;
  if (platform === _platform.Platform.VKCOM) {
    return (0, _jsxRuntime.createScopedElement)(_Text.Text, {
      Component: "div",
      weight: "2"
    }, children);
  }
  return hasStatus || hasBefore ? (0, _jsxRuntime.createScopedElement)(_Headline.Headline, {
    Component: "div",
    weight: "2"
  }, children) : (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "PanelHeaderContent__children-in"
  }, children);
};

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderContent
 */
var PanelHeaderContent = function PanelHeaderContent(_ref2) {
  var className = _ref2.className,
    style = _ref2.style,
    aside = _ref2.aside,
    status = _ref2.status,
    before = _ref2.before,
    children = _ref2.children,
    onClick = _ref2.onClick,
    restProps = (0, _objectWithoutProperties2.default)(_ref2, _excluded);
  var InComponent = onClick ? _Tappable.Tappable : "div";
  var rootProps = onClick ? {} : restProps;
  var platform = (0, _usePlatform.usePlatform)();
  var inProps = onClick ? (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
    onClick: onClick,
    activeEffectDelay: 200,
    hasActive: platform === _platform.IOS,
    activeMode: "opacity"
  }) : {};
  return (0, _jsxRuntime.createScopedElement)("div", (0, _extends2.default)({}, rootProps, {
    vkuiClass: (0, _getClassName.getClassName)("PanelHeaderContent", platform),
    style: style,
    className: className
  }), (0, _utils.hasReactNode)(before) && (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "PanelHeaderContent__before"
  }, before), (0, _jsxRuntime.createScopedElement)(InComponent, (0, _extends2.default)({}, inProps, {
    vkuiClass: (0, _classNames.classNames)("PanelHeaderContent__in", !before && platform !== _platform.ANDROID && "PanelHeaderContent__in--centered")
  }), (0, _utils.hasReactNode)(status) && (0, _jsxRuntime.createScopedElement)(_Caption.Caption, {
    vkuiClass: "PanelHeaderContent__status"
  }, status), (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "PanelHeaderContent__children"
  }, (0, _jsxRuntime.createScopedElement)(PanelHeaderChildren, {
    platform: platform,
    hasStatus: (0, _utils.hasReactNode)(status),
    hasBefore: (0, _utils.hasReactNode)(before)
  }, children), (0, _utils.hasReactNode)(aside) && (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "PanelHeaderContent__aside"
  }, aside)), (0, _utils.hasReactNode)(before) && (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "PanelHeaderContent__width"
  })));
};
exports.PanelHeaderContent = PanelHeaderContent;
//# sourceMappingURL=PanelHeaderContent.js.map