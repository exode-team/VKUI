import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "toggleRef", "closing", "popupDirection", "onClose", "className", "style", "popupOffsetDistance"];
import { createScopedElement } from "../../lib/jsxRuntime";
import * as React from "react";
import { classNames } from "../../lib/classNames";
import { useDOM } from "../../lib/dom";
import { usePlatform } from "../../hooks/usePlatform";
import { useEffectDev } from "../../hooks/useEffectDev";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { isRefObject } from "../../lib/isRefObject";
import { warnOnce } from "../../lib/warnOnce";
import { Platform } from "../../lib/platform";
import { useEventListener } from "../../hooks/useEventListener";
import { FocusTrap } from "../FocusTrap/FocusTrap";
import { Popper } from "../Popper/Popper";
var warn = warnOnce("ActionSheet");
function getEl(ref) {
  return ref && "current" in ref ? ref.current : ref;
}
export var ActionSheetDropdownDesktop = function ActionSheetDropdownDesktop(_ref) {
  var children = _ref.children,
    toggleRef = _ref.toggleRef,
    closing = _ref.closing,
    popupDirection = _ref.popupDirection,
    onClose = _ref.onClose,
    className = _ref.className,
    style = _ref.style,
    _ref$popupOffsetDista = _ref.popupOffsetDistance,
    popupOffsetDistance = _ref$popupOffsetDista === void 0 ? 0 : _ref$popupOffsetDista,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useDOM = useDOM(),
    document = _useDOM.document;
  var platform = usePlatform();
  var _useAdaptivity = useAdaptivity(),
    sizeY = _useAdaptivity.sizeY;
  var elementRef = React.useRef(null);
  useEffectDev(function () {
    var toggleEl = getEl(toggleRef);
    if (!toggleEl) {
      warn("\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E \"toggleRef\" \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043E", "error");
    }
  }, [toggleRef]);
  var isPopupDirectionTop = React.useMemo(function () {
    return popupDirection === "top" || typeof popupDirection === "function" && popupDirection(elementRef) === "top";
  }, [popupDirection, elementRef]);
  var bodyClickListener = useEventListener("click", function (e) {
    var dropdownElement = elementRef === null || elementRef === void 0 ? void 0 : elementRef.current;
    if (dropdownElement && !dropdownElement.contains(e.target)) {
      onClose === null || onClose === void 0 ? void 0 : onClose();
    }
  });
  React.useEffect(function () {
    setTimeout(function () {
      bodyClickListener.add(document.body);
    });
  }, [bodyClickListener, document]);
  var onClick = React.useCallback(function (e) {
    return e.stopPropagation();
  }, []);
  var targetRef = React.useMemo(function () {
    if (isRefObject(toggleRef)) {
      return toggleRef;
    }
    return {
      current: toggleRef
    };
  }, [toggleRef]);
  return createScopedElement(Popper, {
    targetRef: targetRef,
    offsetDistance: popupOffsetDistance,
    placement: isPopupDirectionTop ? "top-end" : "bottom-end",
    vkuiClass: classNames("ActionSheet", platform === Platform.IOS && "ActionSheet--ios", "ActionSheet--desktop", "ActionSheet--sizeY-".concat(sizeY)),
    className: className,
    style: style,
    getRef: elementRef,
    forcePortal: false
  }, createScopedElement(FocusTrap, _extends({
    onClose: onClose
  }, restProps, {
    onClick: onClick
  }), children));
};
//# sourceMappingURL=ActionSheetDropdownDesktop.js.map