"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalRoot = void 0;

var _jsxRuntime = require("../../lib/jsxRuntime");

var _withAdaptivity = require("../../hoc/withAdaptivity");

var _ModalRoot = require("./ModalRoot");

var _ModalRootDesktop = require("./ModalRootDesktop");

var _ScrollContext = require("../AppRoot/ScrollContext");

var _useAdaptivity = require("../../hooks/useAdaptivity");

var ModalRootComponent = function ModalRootComponent(props) {
  var isDesktop = (0, _useAdaptivity.useAdaptivityIsDesktop)();
  (0, _ScrollContext.useScrollLock)(!!props.activeModal);
  var RootComponent = isDesktop ? _ModalRootDesktop.ModalRootDesktop : _ModalRoot.ModalRootTouch;
  return (0, _jsxRuntime.createScopedElement)(RootComponent, props);
};

ModalRootComponent.displayName = "ModalRoot";
/**
 * @see https://vkcom.github.io/VKUI/#/ModalRoot
 */

var ModalRoot = (0, _withAdaptivity.withAdaptivity)(ModalRootComponent, {
  viewWidth: true,
  viewHeight: true,
  hasMouse: true
});
exports.ModalRoot = ModalRoot;
//# sourceMappingURL=ModalRootAdaptive.js.map