import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["bullets", "getRootRef", "children", "slideWidth", "slideIndex", "isDraggable", "onDragStart", "onDragEnd", "onChange", "onPrevClick", "onNextClick", "onEnd", "align", "showArrows", "getRef"];
import { createScopedElement } from "../../lib/jsxRuntime";
import * as React from "react";
import { classNames } from "../../lib/classNames";
import { Touch } from "../Touch/Touch";
import HorizontalScrollArrow from "../HorizontalScroll/HorizontalScrollArrow";
import { useExternRef } from "../../hooks/useExternRef";
import { useDOM } from "../../lib/dom";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { useGlobalEventListener } from "../../hooks/useGlobalEventListener";
import { calcMax, calcMin } from "./helpers";
var ANIMATION_DURATION = 0.24;
var LAYOUT_DEFAULT_STATE = {
  containerWidth: 0,
  viewporOffsettWidth: 0,
  layerWidth: 0,
  min: 0,
  max: 0,
  slides: [],
  isFullyVisible: true
};
var SHIFT_DEFAULT_STATE = {
  animation: undefined,
  shiftX: 0,
  dragging: false,
  deltaX: 0,
  indent: 0
};
export var BaseGallery = function BaseGallery(_ref) {
  var _layoutState$current$8;

  var _ref$bullets = _ref.bullets,
      bullets = _ref$bullets === void 0 ? false : _ref$bullets,
      getRootRef = _ref.getRootRef,
      children = _ref.children,
      _ref$slideWidth = _ref.slideWidth,
      slideWidth = _ref$slideWidth === void 0 ? "100%" : _ref$slideWidth,
      _ref$slideIndex = _ref.slideIndex,
      slideIndex = _ref$slideIndex === void 0 ? 0 : _ref$slideIndex,
      _ref$isDraggable = _ref.isDraggable,
      isDraggable = _ref$isDraggable === void 0 ? true : _ref$isDraggable,
      onDragStart = _ref.onDragStart,
      onDragEnd = _ref.onDragEnd,
      onChange = _ref.onChange,
      onPrevClick = _ref.onPrevClick,
      onNextClick = _ref.onNextClick,
      onEndProp = _ref.onEnd,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? "left" : _ref$align,
      showArrows = _ref.showArrows,
      getRef = _ref.getRef,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var slidesStore = React.useRef({});
  var layoutState = React.useRef(LAYOUT_DEFAULT_STATE);

  var _React$useState = React.useState(SHIFT_DEFAULT_STATE),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      shiftState = _React$useState2[0],
      setShiftState = _React$useState2[1];

  var rootRef = useExternRef(getRootRef);
  var viewportRef = useExternRef(getRef);

  var _useDOM = useDOM(),
      window = _useDOM.window;

  var _useAdaptivity = useAdaptivity(),
      hasMouse = _useAdaptivity.hasMouse;

  var isCenterWithCustomWidth = slideWidth === "custom" && align === "center";

  var validateIndent = function validateIndent(value) {
    var _layoutState$current$, _layoutState$current$2;

    var localMax = (_layoutState$current$ = layoutState.current.max) !== null && _layoutState$current$ !== void 0 ? _layoutState$current$ : 0;
    var localMin = (_layoutState$current$2 = layoutState.current.min) !== null && _layoutState$current$2 !== void 0 ? _layoutState$current$2 : 0;

    if (value < localMin) {
      return localMin;
    } else if (value > localMax) {
      return localMax;
    }

    return value;
  };
  /*
   * Считает отступ слоя галереи
   */


  var calculateIndent = function calculateIndent(targetIndex) {
    var _layoutState$current$3;

    if (layoutState.current.isFullyVisible) {
      return 0;
    }

    var targetSlide = (_layoutState$current$3 = layoutState.current.slides) !== null && _layoutState$current$3 !== void 0 && _layoutState$current$3.length ? layoutState.current.slides[targetIndex] : null;

    if (targetSlide) {
      var coordX = targetSlide.coordX,
          width = targetSlide.width;

      if (isCenterWithCustomWidth) {
        var _layoutState$current$4;

        var viewportWidth = (_layoutState$current$4 = layoutState.current.viewporOffsettWidth) !== null && _layoutState$current$4 !== void 0 ? _layoutState$current$4 : 0;
        return viewportWidth / 2 - coordX - width / 2;
      }

      return validateIndent(-1 * coordX);
    }

    return 0;
  };
  /*
   * Считает отступ слоя галереи во время драга
   */


  var calculateDragIndent = function calculateDragIndent() {
    var _layoutState$current$5, _layoutState$current$6;

    var localMax = (_layoutState$current$5 = layoutState.current.max) !== null && _layoutState$current$5 !== void 0 ? _layoutState$current$5 : 0;
    var localMin = (_layoutState$current$6 = layoutState.current.min) !== null && _layoutState$current$6 !== void 0 ? _layoutState$current$6 : 0;
    var indent = shiftState.shiftX + shiftState.deltaX;

    if (indent > localMax) {
      return localMax + Number((indent - localMax) / 3);
    } else if (indent < localMin) {
      return localMin + Number((indent - localMin) / 3);
    }

    return indent;
  };

  var initializeSlides = function initializeSlides() {
    var _React$Children$map, _rootRef$current$offs, _rootRef$current, _viewportRef$current$, _viewportRef$current;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var localSlides = (_React$Children$map = React.Children.map(children, function (_item, i) {
      var _elem$offsetLeft, _elem$offsetWidth;

      var elem = slidesStore.current["slide-".concat(i)];
      return {
        coordX: (_elem$offsetLeft = elem === null || elem === void 0 ? void 0 : elem.offsetLeft) !== null && _elem$offsetLeft !== void 0 ? _elem$offsetLeft : 0,
        width: (_elem$offsetWidth = elem === null || elem === void 0 ? void 0 : elem.offsetWidth) !== null && _elem$offsetWidth !== void 0 ? _elem$offsetWidth : 0
      };
    })) !== null && _React$Children$map !== void 0 ? _React$Children$map : [];
    var localContainerWidth = (_rootRef$current$offs = (_rootRef$current = rootRef.current) === null || _rootRef$current === void 0 ? void 0 : _rootRef$current.offsetWidth) !== null && _rootRef$current$offs !== void 0 ? _rootRef$current$offs : 0;
    var localViewporOffsettWidth = (_viewportRef$current$ = (_viewportRef$current = viewportRef.current) === null || _viewportRef$current === void 0 ? void 0 : _viewportRef$current.offsetWidth) !== null && _viewportRef$current$ !== void 0 ? _viewportRef$current$ : 0;
    var localLayerWidth = localSlides.reduce(function (val, slide) {
      return slide.width + val;
    }, 0);
    layoutState.current = {
      containerWidth: localContainerWidth,
      viewporOffsettWidth: localViewporOffsettWidth,
      layerWidth: localLayerWidth,
      max: calcMax({
        slides: localSlides,
        viewporOffsettWidth: localViewporOffsettWidth,
        isCenterWithCustomWidth: isCenterWithCustomWidth
      }),
      min: calcMin({
        containerWidth: localContainerWidth,
        layerWidth: localLayerWidth,
        slides: localSlides,
        viewporOffsettWidth: localViewporOffsettWidth,
        isCenterWithCustomWidth: isCenterWithCustomWidth,
        align: align
      }),
      slides: localSlides,
      isFullyVisible: localLayerWidth <= localContainerWidth
    };
    setShiftState(function (prevState) {
      var _options$animation;

      return _objectSpread(_objectSpread({}, prevState), {}, {
        shiftX: calculateIndent(slideIndex),
        animation: (_options$animation = options.animation) !== null && _options$animation !== void 0 ? _options$animation : prevState.shiftX === validateIndent(prevState.shiftX)
      });
    });
  };

  var onResize = function onResize() {
    if (shiftState.animation !== undefined) {
      initializeSlides({
        animation: false
      });
    }
  };

  useGlobalEventListener(window, "resize", onResize);
  useIsomorphicLayoutEffect(function () {
    initializeSlides({
      animation: false
    });
  }, [children, align, slideWidth]);
  useIsomorphicLayoutEffect(function () {
    if (shiftState.animation !== undefined) {
      setShiftState(function (prevState) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          animation: true,
          deltaX: 0,
          shiftX: calculateIndent(slideIndex !== null && slideIndex !== void 0 ? slideIndex : 0)
        });
      });
    }
  }, [slideIndex]);

  var slideLeft = function slideLeft() {
    onChange === null || onChange === void 0 ? void 0 : onChange(slideIndex - 1);
    onPrevClick === null || onPrevClick === void 0 ? void 0 : onPrevClick();
  };

  var slideRight = function slideRight() {
    onChange === null || onChange === void 0 ? void 0 : onChange(slideIndex + 1);
    onNextClick === null || onNextClick === void 0 ? void 0 : onNextClick();
  };
  /*
   * Получает индекс слайда, к которому будет осуществлен переход
   */


  var getTarget = function getTarget(e) {
    var _layoutState$current$7;

    var expectDeltaX = shiftState.deltaX / e.duration * 240 * 0.6;
    var shift = shiftState.shiftX + shiftState.deltaX + expectDeltaX - ((_layoutState$current$7 = layoutState.current.max) !== null && _layoutState$current$7 !== void 0 ? _layoutState$current$7 : 0);
    var direction = shiftState.deltaX < 0 ? 1 : -1; // Находим ближайшую границу слайда к текущему отступу

    var targetIndex = layoutState.current.slides.reduce(function (val, item, index) {
      var previousValue = Math.abs(layoutState.current.slides[val].coordX + shift);
      var currentValue = Math.abs(item.coordX + shift);
      return previousValue < currentValue ? val : index;
    }, slideIndex);

    if (targetIndex === slideIndex) {
      var targetSlide = slideIndex + direction;

      if (targetSlide >= 0 && targetSlide < layoutState.current.slides.length) {
        if (Math.abs(shiftState.deltaX) > layoutState.current.slides[targetSlide].width * 0.05) {
          targetIndex = targetSlide;
        }
      }
    }

    return targetIndex;
  };

  var onStart = function onStart() {
    setShiftState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        animation: false
      });
    });
  };

  var onMoveX = function onMoveX(e) {
    if (isDraggable && !layoutState.current.isFullyVisible) {
      e.originalEvent.preventDefault();

      if (e.isSlideX) {
        // TODO исправить в рамках issue #2698
        onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(e);

        if (shiftState.deltaX !== e.shiftX) {
          setShiftState(function (prevState) {
            return _objectSpread(_objectSpread({}, prevState), {}, {
              deltaX: e.shiftX,
              dragging: e.isSlideX
            });
          });
        }
      }
    }
  };

  var onEnd = function onEnd(e) {
    var targetIndex = e.isSlide ? getTarget(e) : slideIndex !== null && slideIndex !== void 0 ? slideIndex : 0;
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(e);
    var nextShiftState = {
      animation: true,
      dragging: false,
      deltaX: 0
    };
    var shiftXStick = calculateDragIndent();

    if (targetIndex !== slideIndex) {
      // Сохраняем сдвиг слайда в том положении, в каком его оставили после драга (fix issue #2185)
      nextShiftState.shiftX = shiftXStick;
    }

    setShiftState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), nextShiftState);
    });

    if (targetIndex !== slideIndex) {
      onChange === null || onChange === void 0 ? void 0 : onChange(targetIndex);
    } // TODO исправить в рамках issue #2698


    onEndProp === null || onEndProp === void 0 ? void 0 : onEndProp({
      targetIndex: targetIndex
    });
  };

  var indent = shiftState.dragging ? calculateDragIndent() : shiftState.shiftX;
  var layerStyle = {
    WebkitTransform: "translateX(".concat(indent, "px)"),
    transform: "translateX(".concat(indent, "px)"),
    WebkitTransition: shiftState.animation ? "-webkit-transform ".concat(ANIMATION_DURATION, "s cubic-bezier(.1, 0, .25, 1)") : "none",
    transition: shiftState.animation ? "transform ".concat(ANIMATION_DURATION, "s cubic-bezier(.1, 0, .25, 1)") : "none"
  };

  var setSlideRef = function setSlideRef(slideRef, slideIndex) {
    slidesStore.current["slide-".concat(slideIndex)] = slideRef;
  }; // shiftX is negative number <= 0, we can swipe back only if it is < 0


  var canSlideLeft = !layoutState.current.isFullyVisible && shiftState.shiftX < 0;
  var canSlideRight = !layoutState.current.isFullyVisible && ( // we can't move right when gallery layer fully scrolled right, if gallery aligned by left side
  align === "left" && layoutState.current.containerWidth - shiftState.shiftX < ((_layoutState$current$8 = layoutState.current.layerWidth) !== null && _layoutState$current$8 !== void 0 ? _layoutState$current$8 : 0) || // otherwise we need to check current slide index (align = right or align = center)
  align !== "left" && slideIndex < layoutState.current.slides.length - 1);
  return createScopedElement("div", _extends({}, restProps, {
    vkuiClass: classNames("Gallery", "Gallery--".concat(align), shiftState.dragging && "Gallery--dragging", slideWidth === "custom" && "Gallery--custom-width"),
    ref: rootRef
  }), createScopedElement(Touch, {
    vkuiClass: "Gallery__viewport",
    onStartX: onStart,
    onMoveX: onMoveX,
    onEnd: onEnd,
    style: {
      width: slideWidth === "custom" ? "100%" : slideWidth
    },
    getRootRef: viewportRef,
    noSlideClick: true
  }, createScopedElement("div", {
    vkuiClass: "Gallery__layer",
    style: layerStyle
  }, React.Children.map(children, function (item, i) {
    return createScopedElement("div", {
      vkuiClass: "Gallery__slide",
      key: "slide-".concat(i),
      ref: function ref(el) {
        return setSlideRef(el, i);
      }
    }, item);
  }))), bullets && createScopedElement("div", {
    "aria-hidden": "true",
    vkuiClass: classNames("Gallery__bullets", "Gallery__bullets--".concat(bullets))
  }, React.Children.map(children, function (_item, index) {
    return createScopedElement("div", {
      vkuiClass: classNames("Gallery__bullet", index === slideIndex && "Gallery__bullet--active"),
      key: index
    });
  })), showArrows && hasMouse && canSlideLeft && createScopedElement(HorizontalScrollArrow, {
    direction: "left",
    onClick: slideLeft
  }), showArrows && hasMouse && canSlideRight && createScopedElement(HorizontalScrollArrow, {
    direction: "right",
    onClick: slideRight
  }));
};
//# sourceMappingURL=BaseGallery.js.map