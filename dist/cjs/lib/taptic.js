"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runTapticImpactOccurred = runTapticImpactOccurred;
var _vkBridge = _interopRequireDefault(require("@vkontakte/vk-bridge"));
function runTapticImpactOccurred(style) {
  if (_vkBridge.default.supports("VKWebAppTapticImpactOccurred")) {
    _vkBridge.default.send("VKWebAppTapticImpactOccurred", {
      style: style
    }).catch(function () {
      return undefined;
    });
  }
  var event = new CustomEvent('VKWebAppTapticImpactOccurred');

  // eslint-disable-next-line no-restricted-globals
  document.dispatchEvent(event);
}
//# sourceMappingURL=taptic.js.map