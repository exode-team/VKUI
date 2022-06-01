import * as React from "react";
import { AdaptivityProps } from "./AdaptivityContext";
export declare const DESKTOP_SIZE = 1280;
export declare const TABLET_SIZE = 1024;
export declare const SMALL_TABLET_SIZE = 768;
export declare const MOBILE_SIZE = 320;
export declare const MOBILE_LANDSCAPE_HEIGHT = 414;
export declare const MEDIUM_HEIGHT = 720;
/**
 * @see https://vkcom.github.io/VKUI/#/AdaptivityProvider
 */
declare const AdaptivityProvider: React.FC<AdaptivityProps>;
export { AdaptivityProvider };
