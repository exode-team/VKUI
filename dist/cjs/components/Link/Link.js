"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = void 0;

var _jsxRuntime = require("../../lib/jsxRuntime");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _getClassName = require("../../helpers/getClassName");

var _usePlatform = require("../../hooks/usePlatform");

var _Tappable = require("../Tappable/Tappable");

var _excluded = ["children"];

/**
 * @see https://vkcom.github.io/VKUI/#/Link
 */
var Link = function Link(_ref) {
  var children = _ref.children,
      restProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var platform = (0, _usePlatform.usePlatform)();
  return (0, _jsxRuntime.createScopedElement)(_Tappable.Tappable, (0, _extends2.default)({
    Component: restProps.href ? "a" : "button"
  }, restProps, {
    vkuiClass: (0, _getClassName.getClassName)("Link", platform),
    hasActive: false,
    hoverMode: "opacity",
    focusVisibleMode: "outside"
  }), children);
};

exports.Link = Link;
//# sourceMappingURL=Link.js.map