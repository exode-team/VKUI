import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/extends";
var _excluded = ["badge", "before", "indicator", "children", "after", "description", "expandable", "multiline", "sizeY"];
import { createScopedElement } from "../../lib/jsxRuntime";
import { classNames } from "../../lib/classNames";
import { getClassName } from "../../helpers/getClassName";
import { Tappable } from "../Tappable/Tappable";
import { Icon24Chevron } from "@vkontakte/icons";
import { IOS } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { hasReactNode } from "../../lib/utils";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { withAdaptivity, SizeType } from "../../hoc/withAdaptivity";
import { Headline } from "../Typography/Headline/Headline";
import { Footnote } from "../Typography/Footnote/Footnote";
import { Caption } from "../Typography/Caption/Caption";

var SimpleCellTypography = function SimpleCellTypography(props) {
  var _useAdaptivity = useAdaptivity(),
      sizeY = _useAdaptivity.sizeY;

  if (sizeY === SizeType.COMPACT) {
    return createScopedElement(Caption, _extends({
      level: "2"
    }, props));
  }

  return createScopedElement(Footnote, props);
};

var SimpleCellComponent = function SimpleCellComponent(_ref) {
  var badge = _ref.badge,
      before = _ref.before,
      indicator = _ref.indicator,
      children = _ref.children,
      after = _ref.after,
      description = _ref.description,
      expandable = _ref.expandable,
      multiline = _ref.multiline,
      sizeY = _ref.sizeY,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var platform = usePlatform();
  var hasAfter = hasReactNode(after) || expandable && platform === IOS;
  return createScopedElement(Tappable, _extends({}, restProps, {
    vkuiClass: classNames(getClassName("SimpleCell", platform), expandable && "SimpleCell--exp", multiline && "SimpleCell--mult", "SimpleCell--sizeY-".concat(sizeY))
  }), before, createScopedElement("div", {
    vkuiClass: "SimpleCell__main"
  }, createScopedElement("div", {
    vkuiClass: "SimpleCell__content"
  }, createScopedElement(Headline, {
    Component: "span",
    vkuiClass: "SimpleCell__children",
    weight: "3"
  }, children), hasReactNode(badge) && createScopedElement("span", {
    vkuiClass: "SimpleCell__badge"
  }, badge)), description && createScopedElement("div", {
    vkuiClass: "SimpleCell__content"
  }, createScopedElement(SimpleCellTypography, {
    vkuiClass: "SimpleCell__text SimpleCell__subtitle"
  }, description))), hasReactNode(indicator) && createScopedElement(Headline, {
    Component: "span",
    weight: "3",
    vkuiClass: "SimpleCell__indicator"
  }, indicator), hasAfter && createScopedElement("div", {
    vkuiClass: "SimpleCell__after"
  }, after, expandable && platform === IOS && createScopedElement(Icon24Chevron, null)));
};
/**
 * @see https://vkcom.github.io/VKUI/#/SimpleCell
 */


export var SimpleCell = withAdaptivity(SimpleCellComponent, {
  sizeY: true
});
SimpleCell.displayName = "SimpleCell";
//# sourceMappingURL=SimpleCell.js.map