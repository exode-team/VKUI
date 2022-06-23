"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomScrollView = void 0;

var _jsxRuntime = require("../../lib/jsxRuntime");

var _dom = require("../../lib/dom");

var React = _interopRequireWildcard(require("react"));

var _useExternRef = require("../../hooks/useExternRef");

var _useIsomorphicLayoutEffect = require("../../lib/useIsomorphicLayoutEffect");

var _useEventListener = require("../../hooks/useEventListener");

var CustomScrollView = function CustomScrollView(_ref) {
  var className = _ref.className,
      children = _ref.children,
      externalBoxRef = _ref.boxRef,
      windowResize = _ref.windowResize;

  var _useDOM = (0, _dom.useDOM)(),
      document = _useDOM.document,
      window = _useDOM.window;

  var ratio = React.useRef(NaN);
  var lastTrackerTop = React.useRef(0);
  var clientHeight = React.useRef(0);
  var trackerHeight = React.useRef(0);
  var scrollHeight = React.useRef(0);
  var transformProp = React.useRef("");
  var startY = React.useRef(0);
  var trackerTop = React.useRef(0);
  var boxRef = (0, _useExternRef.useExternRef)(externalBoxRef);
  var barY = React.useRef(null);
  var trackerY = React.useRef(null);

  var setTrackerPosition = function setTrackerPosition(scrollTop) {
    lastTrackerTop.current = scrollTop;

    if (trackerY.current !== null) {
      trackerY.current.style[transformProp.current] = "translate(0, ".concat(scrollTop, "px)");
    }
  };

  var setTrackerPositionFromScroll = function setTrackerPositionFromScroll(scrollTop) {
    var progress = scrollTop / (scrollHeight.current - clientHeight.current);
    setTrackerPosition((clientHeight.current - trackerHeight.current) * progress);
  };

  var resize = function resize() {
    if (!boxRef.current || !barY.current || !trackerY.current) {
      return;
    }

    var localClientHeight = boxRef.current.clientHeight;
    var localScrollHeight = boxRef.current.scrollHeight;
    var localRatio = localClientHeight / localScrollHeight;
    var localTrackerHeight = Math.max(localClientHeight * localRatio, 40);
    ratio.current = localRatio;
    clientHeight.current = localClientHeight;
    scrollHeight.current = localScrollHeight;
    trackerHeight.current = localTrackerHeight;

    if (localRatio >= 1) {
      barY.current.style.display = "none";
    } else {
      barY.current.style.display = "";
      trackerY.current.style.height = "".concat(localTrackerHeight, "px");
      setTrackerPositionFromScroll(boxRef.current.scrollTop);
    }
  };

  var resizeHandler = (0, _useEventListener.useEventListener)("resize", resize);
  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function () {
    if (windowResize && window) {
      resizeHandler.add(window);
    }
  }, [windowResize, window]);
  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function () {
    var _trackerY$current;

    var style = (_trackerY$current = trackerY.current) === null || _trackerY$current === void 0 ? void 0 : _trackerY$current.style;
    var prop = "";

    if (style !== undefined) {
      if ("transform" in style) {
        prop = "transform";
      } else if ("webkitTransform" in style) {
        prop = "webkitTransform";
      }
    }

    transformProp.current = prop;
  }, []);
  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(resize);

  var setScrollPositionFromTracker = function setScrollPositionFromTracker(trackerTop) {
    var progress = trackerTop / (clientHeight.current - trackerHeight.current);

    if (boxRef.current !== null) {
      boxRef.current.scrollTop = (scrollHeight.current - clientHeight.current) * progress;
    }
  };

  var onMove = function onMove(e) {
    e.preventDefault();
    var diff = e.clientY - startY.current;
    var position = Math.min(Math.max(trackerTop.current + diff, 0), clientHeight.current - trackerHeight.current);
    setScrollPositionFromTracker(position);
  };

  var onUp = function onUp(e) {
    e.preventDefault();
    unsubscribe();
  };

  var scroll = function scroll() {
    if (ratio.current >= 1 || !boxRef.current) {
      return;
    }

    setTrackerPositionFromScroll(boxRef.current.scrollTop);
  };

  var listeners = [(0, _useEventListener.useEventListener)("mousemove", onMove), (0, _useEventListener.useEventListener)("mouseup", onUp)];

  function subscribe(el) {
    if (el) {
      listeners.forEach(function (l) {
        return l.add(el);
      });
    }
  }

  function unsubscribe() {
    listeners.forEach(function (l) {
      return l.remove();
    });
  }

  var onDragStart = function onDragStart(e) {
    e.preventDefault();
    startY.current = e.clientY;
    trackerTop.current = lastTrackerTop.current;
    subscribe(document);
  };

  return (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "CustomScrollView",
    className: className
  }, (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "CustomScrollView__barY",
    ref: barY
  }, (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "CustomScrollView__trackerY",
    ref: trackerY,
    onMouseDown: onDragStart
  })), (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "CustomScrollView__box",
    tabIndex: -1,
    ref: boxRef,
    onScroll: scroll
  }, children));
};

exports.CustomScrollView = CustomScrollView;
//# sourceMappingURL=CustomScrollView.js.map