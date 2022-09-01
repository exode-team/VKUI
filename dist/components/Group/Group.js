import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["header", "description", "children", "separator", "getRootRef", "mode", "sizeX"];
import { createScopedElement } from "../../lib/jsxRuntime";
import * as React from "react";
import { IOS } from "../../lib/platform";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { Spacing } from "../Spacing/Spacing";
import { Separator } from "../Separator/Separator";
import { hasReactNode } from "../../lib/utils";
import { Caption } from "../Typography/Caption/Caption";
import { withAdaptivity, SizeType } from "../../hoc/withAdaptivity";
import { ModalRootContext } from "../ModalRoot/ModalRootContext";

var GroupComponent = function GroupComponent(_ref) {
  var header = _ref.header,
      description = _ref.description,
      children = _ref.children,
      _ref$separator = _ref.separator,
      separator = _ref$separator === void 0 ? "auto" : _ref$separator,
      getRootRef = _ref.getRootRef,
      mode = _ref.mode,
      sizeX = _ref.sizeX,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var _React$useContext = React.useContext(ModalRootContext),
      isInsideModal = _React$useContext.isInsideModal;

  var platform = usePlatform();
  var computedMode = mode;

  if (!mode) {
    computedMode = sizeX === SizeType.COMPACT || isInsideModal ? "plain" : "card";
  }

  var separatorElement = null;

  if (separator !== "hide") {
    var separatorClassName = classNames("Group__separator", separator === "show" && "Group__separator--force");
    separatorElement = computedMode === "card" ? createScopedElement(Spacing, {
      vkuiClass: separatorClassName,
      size: 16
    }) : createScopedElement(Separator, {
      vkuiClass: separatorClassName
    });
  }

  return createScopedElement("section", _extends({}, restProps, {
    ref: getRootRef,
    vkuiClass: classNames("Group", platform === IOS && "Group--ios", // TODO v5.0.0 Новая адаптивность
    "Group--sizeX-".concat(sizeX), "Group--".concat(computedMode))
  }), createScopedElement("div", {
    vkuiClass: "Group__inner"
  }, header, children, hasReactNode(description) && createScopedElement(Caption, {
    vkuiClass: "Group__description"
  }, description)), separatorElement);
};
/**
 * @see https://vkcom.github.io/VKUI/#/Group
 */


export var Group = withAdaptivity(GroupComponent, {
  sizeX: true
});
Group.displayName = "Group";
//# sourceMappingURL=Group.js.map