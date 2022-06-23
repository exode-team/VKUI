import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["header", "description", "children", "separator", "getRootRef", "mode", "sizeX"];
import { createScopedElement } from "../../lib/jsxRuntime";
import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import { Separator } from "../Separator/Separator";
import { hasReactNode } from "../../lib/utils";
import { Caption } from "../Typography/Caption/Caption";
import { withAdaptivity, SizeType } from "../../hoc/withAdaptivity";
import { ModalRootContext } from "../ModalRoot/ModalRootContext";

var GroupComponent = function GroupComponent(props) {
  var header = props.header,
      description = props.description,
      children = props.children,
      _props$separator = props.separator,
      separator = _props$separator === void 0 ? "auto" : _props$separator,
      getRootRef = props.getRootRef,
      mode = props.mode,
      sizeX = props.sizeX,
      restProps = _objectWithoutProperties(props, _excluded);

  var _React$useContext = React.useContext(ModalRootContext),
      isInsideModal = _React$useContext.isInsideModal;

  var platform = usePlatform();
  var computedMode = mode;

  if (!mode) {
    computedMode = sizeX === SizeType.COMPACT || isInsideModal ? "plain" : "card";
  }

  return createScopedElement("section", _extends({}, restProps, {
    ref: getRootRef,
    vkuiClass: classNames(getClassName("Group", platform), "Group--sizeX-".concat(sizeX), "Group--".concat(computedMode))
  }), createScopedElement("div", {
    vkuiClass: "Group__inner"
  }, header, children, hasReactNode(description) && createScopedElement(Caption, {
    vkuiClass: "Group__description"
  }, description)), separator !== "hide" && createScopedElement(Separator // eslint-disable-next-line vkui/no-object-expression-in-arguments
  , {
    vkuiClass: classNames("Group__separator", {
      "Group__separator--force": separator === "show"
    }),
    expanded: computedMode === "card"
  }));
};
/**
 * @see https://vkcom.github.io/VKUI/#/Group
 */


export var Group = withAdaptivity(GroupComponent, {
  sizeX: true
});
Group.displayName = "Group";
//# sourceMappingURL=Group.js.map