import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "className", "header", "text", "style", "iosCloseItem", "popupDirection", "popupOffsetDistance"];
import { createScopedElement } from "../../lib/jsxRuntime";
import * as React from "react";
import { PopoutWrapper } from "../PopoutWrapper/PopoutWrapper";
import { IOS } from "../../lib/platform";
import { ActionSheetDropdownDesktop } from "./ActionSheetDropdownDesktop";
import { ActionSheetDropdown } from "./ActionSheetDropdown";
import { hasReactNode, noop } from "../../lib/utils";
import { ActionSheetContext } from "./ActionSheetContext";
import { Footnote } from "../Typography/Footnote/Footnote";
import { usePlatform } from "../../hooks/usePlatform";
import { useTimeout } from "../../hooks/useTimeout";
import { useAdaptivityIsDesktop } from "../../hooks/useAdaptivity";
import { useObjectMemo } from "../../hooks/useObjectMemo";
import { warnOnce } from "../../lib/warnOnce";
import { useScrollLock } from "../AppRoot/ScrollContext";
var warn = warnOnce("ActionSheet");

/**
 * @see https://vkcom.github.io/VKUI/#/ActionSheet
 */
export var ActionSheet = function ActionSheet(_ref) {
  var children = _ref.children,
    className = _ref.className,
    header = _ref.header,
    text = _ref.text,
    style = _ref.style,
    iosCloseItem = _ref.iosCloseItem,
    _ref$popupDirection = _ref.popupDirection,
    popupDirection = _ref$popupDirection === void 0 ? "bottom" : _ref$popupDirection,
    popupOffsetDistance = _ref.popupOffsetDistance,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var platform = usePlatform();
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    closing = _React$useState2[0],
    setClosing = _React$useState2[1];
  var onClose = function onClose() {
    return setClosing(true);
  };
  var _action = React.useRef(noop);
  var afterClose = function afterClose() {
    var _restProps$onClose;
    (_restProps$onClose = restProps.onClose) === null || _restProps$onClose === void 0 ? void 0 : _restProps$onClose.call(restProps);
    _action.current();
    _action.current = noop;
  };
  if (process.env.NODE_ENV === "development" && !restProps.onClose) {
    warn("\u0411\u0435\u0437 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \"onClose\" \u043D\u0435\u043B\u044C\u0437\u044F \u0437\u0430\u043A\u0440\u044B\u0442\u044C ActionSheet \u043F\u043E \u043A\u043B\u0438\u043A\u0443 \u0432\u043D\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430", "error");
  }
  var isDesktop = useAdaptivityIsDesktop();
  useScrollLock(!isDesktop);
  var timeout = platform === IOS ? 300 : 200;
  if (isDesktop) {
    timeout = 0;
  }
  var fallbackTransitionFinish = useTimeout(afterClose, timeout);
  React.useEffect(function () {
    if (closing) {
      fallbackTransitionFinish.set();
    } else {
      fallbackTransitionFinish.clear();
    }
  }, [closing, fallbackTransitionFinish]);
  var onItemClick = React.useCallback(function (action, immediateAction, autoclose) {
    return function (event) {
      event.persist();
      immediateAction && immediateAction(event);
      if (autoclose) {
        _action.current = function () {
          return action && action(event);
        };
        setClosing(true);
      } else {
        action && action(event);
      }
    };
  }, []);
  var contextValue = useObjectMemo({
    onItemClick: onItemClick,
    isDesktop: isDesktop
  });
  var DropdownComponent = isDesktop ? ActionSheetDropdownDesktop : ActionSheetDropdown;
  var dropdownProps = isDesktop ? Object.assign(restProps, {
    popupOffsetDistance: popupOffsetDistance,
    popupDirection: popupDirection
  }) : restProps;
  var actionSheet = createScopedElement(ActionSheetContext.Provider, {
    value: contextValue
  }, createScopedElement(DropdownComponent, _extends({
    closing: closing,
    timeout: timeout
  }, dropdownProps, {
    onClose: onClose,
    className: isDesktop ? className : undefined,
    style: isDesktop ? style : undefined
  }), (hasReactNode(header) || hasReactNode(text)) && createScopedElement("header", {
    vkuiClass: "ActionSheet__header"
  }, hasReactNode(header) && createScopedElement(Footnote, {
    weight: "2",
    vkuiClass: "ActionSheet__title"
  }, header), hasReactNode(text) && createScopedElement(Footnote, {
    vkuiClass: "ActionSheet__text"
  }, text)), children, platform === IOS && !isDesktop && iosCloseItem));
  if (isDesktop) {
    return actionSheet;
  }
  return createScopedElement(PopoutWrapper, {
    closing: closing,
    alignY: "bottom",
    className: className,
    style: style,
    onClick: onClose,
    hasMask: true,
    fixed: true
  }, actionSheet);
};
//# sourceMappingURL=ActionSheet.js.map