/// <reference types="react" />
import "./FocusVisible.css";
export declare type FocusVisibleMode = "inside" | "outside";
export interface FocusVisibleProps {
    mode: FocusVisibleMode;
}
/**
 * @see https://vkcom.github.io/VKUI/#/FocusVisible
 */
export declare const FocusVisible: ({ mode }: FocusVisibleProps) => JSX.Element;