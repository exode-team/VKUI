"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersStack = void 0;

var _jsxRuntime = require("../../lib/jsxRuntime");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _getClassName = require("../../helpers/getClassName");

var _usePlatform = require("../../hooks/usePlatform");

var _utils = require("../../lib/utils");

var _classNames = require("../../lib/classNames");

var _useIsomorphicLayoutEffect = require("../../lib/useIsomorphicLayoutEffect");

var _Caption = require("../Typography/Caption/Caption");

var _Subhead = require("../Typography/Subhead/Subhead");

var _masks = require("./masks");

var _dom = require("../../lib/dom");

var _excluded = ["photos", "visibleCount", "size", "layout", "children"];

/**
 * @see https://vkcom.github.io/VKUI/#/UsersStack
 */
var UsersStack = function UsersStack(props) {
  var platform = (0, _usePlatform.usePlatform)();
  var _props$photos = props.photos,
      photos = _props$photos === void 0 ? [] : _props$photos,
      _props$visibleCount = props.visibleCount,
      visibleCount = _props$visibleCount === void 0 ? 3 : _props$visibleCount,
      _props$size = props.size,
      size = _props$size === void 0 ? 's' : _props$size,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? 'horizontal' : _props$layout,
      children = props.children,
      restProps = (0, _objectWithoutProperties2.default)(props, _excluded);

  var _useDOM = (0, _dom.useDOM)(),
      document = _useDOM.document;

  (0, _useIsomorphicLayoutEffect.useIsomorphicLayoutEffect)(function () {
    (0, _masks.createMasks)(document);
  }, [document]);
  var othersCount = Math.max(0, photos.length - visibleCount);
  var canShowOthers = othersCount > 0 && size === 'm';
  var photosShown = photos.slice(0, visibleCount);
  var parseSize = {
    xs: 16,
    s: 24,
    m: 32
  };

  var getClipPath = function getClipPath(index) {
    return index === 0 ? '' : "url(#users_stack_mask_".concat(parseSize[size], "_left)");
  };

  return (0, _jsxRuntime.createScopedElement)("div", (0, _extends2.default)({}, restProps, {
    // eslint-disable-next-line vkui/no-object-expression-in-arguments
    vkuiClass: (0, _classNames.classNames)((0, _getClassName.getClassName)('UsersStack', platform), "UsersStack--size-".concat(size), "UsersStack--l-".concat(layout), {
      'UsersStack--others': canShowOthers
    })
  }), (0, _jsxRuntime.createScopedElement)("div", {
    vkuiClass: "UsersStack__photos",
    role: "presentation"
  }, photosShown.map(function (item, i) {
    return (0, _jsxRuntime.createScopedElement)("div", {
      key: i,
      vkuiClass: "UsersStack__photo",
      style: {
        clipPath: getClipPath(i)
      }
    }, item);
  }), canShowOthers && (0, _jsxRuntime.createScopedElement)(_Caption.Caption, {
    weight: "1",
    vkuiClass: "UsersStack__photo UsersStack__photo--others",
    "aria-hidden": "true"
  }, (0, _jsxRuntime.createScopedElement)("span", null, "+", othersCount))), (0, _utils.hasReactNode)(children) && (0, _jsxRuntime.createScopedElement)(_Subhead.Subhead, {
    Component: "span",
    vkuiClass: "UsersStack__text"
  }, children));
}; // eslint-disable-next-line import/no-default-export


exports.UsersStack = UsersStack;
//# sourceMappingURL=UsersStack.js.map