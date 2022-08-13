import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["mode", "gap", "stretched", "align", "getRootRef", "children"];
import { createScopedElement } from "../../lib/jsxRuntime";
import { classNames } from "../../lib/classNames";
import "./ButtonGroup.css";

/**
 * @see https://vkcom.github.io/VKUI/#/ButtonGroup
 */
export var ButtonGroup = function ButtonGroup(_ref) {
  var _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? "horizontal" : _ref$mode,
      _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? "m" : _ref$gap,
      _ref$stretched = _ref.stretched,
      stretched = _ref$stretched === void 0 ? false : _ref$stretched,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? "left" : _ref$align,
      getRootRef = _ref.getRootRef,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return createScopedElement("div", _extends({
    vkuiClass: classNames("ButtonGroup", "ButtonGroup--mode-".concat(mode), gap !== "none" && "ButtonGroup--gap-".concat(gap), stretched && "ButtonGroup--stretched", "ButtonGroup--align-".concat(align)),
    role: "group",
    ref: getRootRef
  }, restProps), children);
};
//# sourceMappingURL=ButtonGroup.js.map