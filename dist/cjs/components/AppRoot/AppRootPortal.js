"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppRootPortal = void 0;

var _jsxRuntime = require("../../lib/jsxRuntime");

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _AppRootContext = require("./AppRootContext");

var AppRootPortal = function AppRootPortal(_ref) {
  var _forcePortal;

  var children = _ref.children,
      className = _ref.className,
      forcePortal = _ref.forcePortal;

  var _React$useContext = React.useContext(_AppRootContext.AppRootContext),
      portalRoot = _React$useContext.portalRoot,
      mode = _React$useContext.mode;

  forcePortal = (_forcePortal = forcePortal) !== null && _forcePortal !== void 0 ? _forcePortal : mode !== "full";
  return portalRoot && forcePortal ? /*#__PURE__*/(0, _reactDom.createPortal)((0, _jsxRuntime.createScopedElement)("div", {
    className: className
  }, children), portalRoot) : (0, _jsxRuntime.createScopedElement)(React.Fragment, null, children);
};

exports.AppRootPortal = AppRootPortal;
//# sourceMappingURL=AppRootPortal.js.map