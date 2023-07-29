import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import * as React from "react";
import { useTimeout } from "../../hooks/useTimeout";

/**
 * Хук, который позволяет управлять видимостью ползунка скроллбара.
 * @param autoHideScrollbar - скрывать ли ползунок скроллбара
 * @param autoHideScrollbarDelay - через какое кол-во миллисекунд ползунок скроллбара скрывается
 * @returns Объект, содержащий параметры, которые позволяют управлять видимостью ползунка
 */
export var useTrackerVisibility = function useTrackerVisibility() {
  var autoHideScrollbar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var autoHideScrollbarDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var _React$useState = React.useState(!autoHideScrollbar),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    trackerVisible = _React$useState2[0],
    setTrackerVisible = _React$useState2[1];
  var isMouseOver = React.useRef(false);
  var isTrackerDragging = React.useRef(false);
  var _useTimeout = useTimeout(function () {
      return setTrackerVisible(false);
    }, autoHideScrollbarDelay),
    setVisibilityTimeout = _useTimeout.set,
    clearVisibilityTimeout = _useTimeout.clear;
  var onTrackerDragStart = React.useCallback(function () {
    clearVisibilityTimeout();
    setTrackerVisible(true);
    isTrackerDragging.current = true;
  }, [clearVisibilityTimeout]);
  var onTrackerDragStop = React.useCallback(function () {
    isTrackerDragging.current = false;
    if (!isMouseOver.current) {
      setVisibilityTimeout();
    }
  }, [setVisibilityTimeout, isMouseOver]);

  /**
   * Позволяет "запланировать" скрытие ползунка через delay миллисекунд. Если тайм-аут не успевает сработать, то каждый
   * последующий вызов функции откладывает скрытие ползунка на delay миллисекунд
   */
  var queueTrackerVisibility = React.useCallback(function () {
    if (isTrackerDragging.current) {
      return;
    }
    setTrackerVisible(true);
    setVisibilityTimeout();
  }, [setVisibilityTimeout]);
  var onTrackerMouseEnter = React.useCallback(function () {
    clearVisibilityTimeout();
    isMouseOver.current = true;
    setTrackerVisible(true);
  }, [clearVisibilityTimeout]);
  var onTrackerMouseLeave = React.useCallback(function () {
    queueTrackerVisibility();
    isMouseOver.current = false;
  }, [queueTrackerVisibility]);
  var onTargetScroll = React.useCallback(function () {
    queueTrackerVisibility();
  }, [queueTrackerVisibility]);
  return {
    trackerVisible: trackerVisible,
    onTrackerDragStart: onTrackerDragStart,
    onTrackerDragStop: onTrackerDragStop,
    onTrackerMouseEnter: onTrackerMouseEnter,
    onTrackerMouseLeave: onTrackerMouseLeave,
    onTargetScroll: onTargetScroll
  };
};
//# sourceMappingURL=useTrackerVisibility.js.map