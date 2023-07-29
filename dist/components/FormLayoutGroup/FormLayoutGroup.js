import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "mode", "removable", "segmented", "removePlaceholder", "onRemove", "getRootRef"];
import { createScopedElement } from "../../lib/jsxRuntime";
import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { noop } from "../../lib/utils";
import { useExternRef } from "../../hooks/useExternRef";
import { usePlatform } from "../../hooks/usePlatform";
import { Removable } from "../Removable/Removable";
import { useAdaptivity } from "../../hooks/useAdaptivity";
/**
 * @see https://vkcom.github.io/VKUI/#/FormLayoutGroup
 */
export var FormLayoutGroup = function FormLayoutGroup(_ref) {
  var children = _ref.children,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? "vertical" : _ref$mode,
    removable = _ref.removable,
    segmented = _ref.segmented,
    _ref$removePlaceholde = _ref.removePlaceholder,
    removePlaceholder = _ref$removePlaceholde === void 0 ? "Удалить" : _ref$removePlaceholde,
    _ref$onRemove = _ref.onRemove,
    _onRemove = _ref$onRemove === void 0 ? noop : _ref$onRemove,
    getRootRef = _ref.getRootRef,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var platform = usePlatform();
  var _useAdaptivity = useAdaptivity(),
    sizeY = _useAdaptivity.sizeY;
  var isRemovable = removable && mode === "horizontal";
  var isSegmented = segmented && mode === "horizontal";
  var rootEl = useExternRef(getRootRef);
  return createScopedElement("div", _extends({
    ref: rootEl,
    vkuiClass: classNames(getClassName("FormLayoutGroup", platform), // TODO: v5 remove
    "FormLayoutGroup--sizeY-".concat(sizeY), "FormLayoutGroup--".concat(mode), isRemovable && "FormLayoutGroup--removable", isSegmented && "FormLayoutGroup--segmented")
  }, restProps), isRemovable ? createScopedElement(Removable, {
    vkuiClass: "FormLayoutGroup__removable",
    align: "start",
    removePlaceholder: removePlaceholder,
    onRemove: function onRemove(e) {
      if (rootEl !== null && rootEl !== void 0 && rootEl.current) {
        _onRemove(e, rootEl.current);
      }
    }
  }, children) : createScopedElement(React.Fragment, null, children, createScopedElement("span", {
    vkuiClass: "FormLayoutGroup__offset",
    "aria-hidden": true
  })));
};
//# sourceMappingURL=FormLayoutGroup.js.map