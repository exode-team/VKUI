import * as React from "react";
import "./FocusVisible.css";
export declare type FocusVisibleMode = "inside" | "outside";
interface FocusVisibleProps {
    mode: FocusVisibleMode;
}
/**
 * @see https://vkcom.github.io/VKUI/#/FocusVisible
 */
export declare const FocusVisible: React.FC<FocusVisibleProps>;
export {};
