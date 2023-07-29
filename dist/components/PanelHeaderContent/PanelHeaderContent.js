import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "style", "aside", "status", "before", "children", "onClick"];
import { createScopedElement } from "../../lib/jsxRuntime";
import { classNames } from "../../lib/classNames";
import { Tappable } from "../Tappable/Tappable";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { getClassName } from "../../helpers/getClassName";
import { Caption } from "../Typography/Caption/Caption";
import { Headline } from "../Typography/Headline/Headline";
import { IOS, ANDROID, Platform } from "../../lib/platform";
import { Text } from "../Typography/Text/Text";
var PanelHeaderChildren = function PanelHeaderChildren(_ref) {
  var platform = _ref.platform,
    hasStatus = _ref.hasStatus,
    hasBefore = _ref.hasBefore,
    children = _ref.children;
  if (platform === Platform.VKCOM) {
    return createScopedElement(Text, {
      Component: "div",
      weight: "2"
    }, children);
  }
  return hasStatus || hasBefore ? createScopedElement(Headline, {
    Component: "div",
    weight: "2"
  }, children) : createScopedElement("div", {
    vkuiClass: "PanelHeaderContent__children-in"
  }, children);
};

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderContent
 */
export var PanelHeaderContent = function PanelHeaderContent(_ref2) {
  var className = _ref2.className,
    style = _ref2.style,
    aside = _ref2.aside,
    status = _ref2.status,
    before = _ref2.before,
    children = _ref2.children,
    onClick = _ref2.onClick,
    restProps = _objectWithoutProperties(_ref2, _excluded);
  var InComponent = onClick ? Tappable : "div";
  var rootProps = onClick ? {} : restProps;
  var platform = usePlatform();
  var inProps = onClick ? _objectSpread(_objectSpread({}, restProps), {}, {
    onClick: onClick,
    activeEffectDelay: 200,
    hasActive: platform === IOS,
    activeMode: "opacity"
  }) : {};
  return createScopedElement("div", _extends({}, rootProps, {
    vkuiClass: getClassName("PanelHeaderContent", platform),
    style: style,
    className: className
  }), hasReactNode(before) && createScopedElement("div", {
    vkuiClass: "PanelHeaderContent__before"
  }, before), createScopedElement(InComponent, _extends({}, inProps, {
    vkuiClass: classNames("PanelHeaderContent__in", !before && platform !== ANDROID && "PanelHeaderContent__in--centered")
  }), hasReactNode(status) && createScopedElement(Caption, {
    vkuiClass: "PanelHeaderContent__status"
  }, status), createScopedElement("div", {
    vkuiClass: "PanelHeaderContent__children"
  }, createScopedElement(PanelHeaderChildren, {
    platform: platform,
    hasStatus: hasReactNode(status),
    hasBefore: hasReactNode(before)
  }, children), hasReactNode(aside) && createScopedElement("div", {
    vkuiClass: "PanelHeaderContent__aside"
  }, aside)), hasReactNode(before) && createScopedElement("div", {
    vkuiClass: "PanelHeaderContent__width"
  })));
};
//# sourceMappingURL=PanelHeaderContent.js.map