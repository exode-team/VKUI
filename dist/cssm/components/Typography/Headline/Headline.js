import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "weight", "level", "Component"];
import { createScopedElement } from "../../../lib/jsxRuntime";
import { usePlatform } from "../../../hooks/usePlatform";
import { classNames } from "../../../lib/classNames";
import { getClassName } from "../../../helpers/getClassName";
import "./Headline.css";

/**
 * @see https://vkcom.github.io/VKUI/#/Headline
 */
export var Headline = function Headline(_ref) {
  var children = _ref.children,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? "3" : _ref$weight,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? "1" : _ref$level,
      _ref$Component = _ref.Component,
      Component = _ref$Component === void 0 ? "h3" : _ref$Component,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var platform = usePlatform();
  return createScopedElement(Component, _extends({}, restProps, {
    vkuiClass: classNames(getClassName("Headline", platform), // TODO: v5 remove
    "Headline--l-".concat(level), "Headline--w-".concat(weight))
  }), children);
};
//# sourceMappingURL=Headline.js.map