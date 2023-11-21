import vkBridge from "@vkontakte/vk-bridge";
export function runTapticImpactOccurred(style) {
  if (vkBridge.supports("VKWebAppTapticImpactOccurred")) {
    vkBridge.send("VKWebAppTapticImpactOccurred", {
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