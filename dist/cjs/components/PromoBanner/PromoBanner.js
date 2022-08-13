"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PromoBanner = void 0;

var _jsxRuntime = require("../../lib/jsxRuntime");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _icons = require("@vkontakte/icons");

var _Button = require("../Button/Button");

var _SimpleCell = require("../SimpleCell/SimpleCell");

var _Avatar = require("../Avatar/Avatar");

var _Caption = require("../Typography/Caption/Caption");

var _usePlatform = require("../../hooks/usePlatform");

var _getClassName = require("../../helpers/getClassName");

var _warnOnce = require("../../lib/warnOnce");

var _excluded = ["bannerData", "onClose", "isCloseButtonHidden"];
var warn = (0, _warnOnce.warnOnce)("PromoBanner");
/**
 * @see https://vkcom.github.io/VKUI/#/PromoBanner
 */

var PromoBanner = function PromoBanner(_ref) {
  var _ref$bannerData = _ref.bannerData,
      bannerData = _ref$bannerData === void 0 ? {} : _ref$bannerData,
      onClose = _ref.onClose,
      isCloseButtonHidden = _ref.isCloseButtonHidden,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var platform = (0, _usePlatform.usePlatform)();
  var ageRestrictions = bannerData.ageRestrictions != null ? parseInt(bannerData.ageRestrictions) : bannerData.ageRestriction;

  if (bannerData.ageRestriction && process.env.NODE_ENV === "development") {
    warn("Свойство bannerData.ageRestriction устарело и будет удалено в 5.0.0. Используйте bannerData.ageRestrictions");
  }

  var _React$useState = React.useState(""),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      currentPixel = _React$useState2[0],
      setCurrentPixel = _React$useState2[1];

  var statsPixels = React.useMemo(function () {
    return bannerData.statistics ? bannerData.statistics.reduce(function (acc, item) {
      return (0, _objectSpread3.default)((0, _objectSpread3.default)({}, acc), {}, (0, _defineProperty2.default)({}, item.type, item.url));
    }, {}) : {};
  }, [bannerData.statistics]);
  var onClick = React.useCallback(function () {
    return setCurrentPixel(statsPixels.click || "");
  }, [statsPixels.click]);
  React.useEffect(function () {
    if (statsPixels.playbackStarted) {
      setCurrentPixel(statsPixels.playbackStarted);
    }
  }, [statsPixels.playbackStarted]);
  return (0, _jsxRuntime.createScopedElement)("div", (0, _extends2.default)({
    vkuiClass: (0, _getClassName.getClassName)("PromoBanner", platform)
  }, restProps), (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "PromoBanner__head"
  }, (0, _jsxRuntime.createScopedElement)(_Caption.Caption, {
    vkuiClass: "PromoBanner__label"
  }, bannerData.advertisingLabel || "Advertisement"), ageRestrictions != null && (0, _jsxRuntime.createScopedElement)(_Caption.Caption, {
    vkuiClass: "PromoBanner__age"
  }, ageRestrictions, "+"), !isCloseButtonHidden && (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "PromoBanner__close",
    onClick: onClose
  }, (0, _jsxRuntime.createScopedElement)(_icons.Icon24Dismiss, null))), (0, _jsxRuntime.createScopedElement)(_SimpleCell.SimpleCell, {
    href: bannerData.trackingLink,
    onClick: onClick,
    rel: "nofollow noopener noreferrer",
    target: "_blank",
    before: (0, _jsxRuntime.createScopedElement)(_Avatar.Avatar, {
      mode: "image",
      size: 48,
      src: bannerData.iconLink,
      alt: bannerData.title
    }),
    after: (0, _jsxRuntime.createScopedElement)(_Button.Button, {
      mode: "outline"
    }, bannerData.ctaText),
    description: bannerData.domain
  }, bannerData.title), currentPixel.length > 0 && (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "PromoBanner__pixels"
  }, (0, _jsxRuntime.createScopedElement)("img", {
    src: currentPixel,
    alt: ""
  })));
};

exports.PromoBanner = PromoBanner;
//# sourceMappingURL=PromoBanner.js.map