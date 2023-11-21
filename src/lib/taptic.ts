import vkBridge, { TapticVibrationPowerType } from "@vkontakte/vk-bridge";

export function runTapticImpactOccurred(style: TapticVibrationPowerType) {
  if (vkBridge.supports("VKWebAppTapticImpactOccurred")) {
    vkBridge
      .send("VKWebAppTapticImpactOccurred", { style })
      .catch(() => undefined);
  }

  const event = new CustomEvent('VKWebAppTapticImpactOccurred');

  // eslint-disable-next-line no-restricted-globals
  document.dispatchEvent(event);
}
