import * as React from "react";
import { SpinnerProps } from "../Spinner/Spinner";
export interface PanelSpinnerProps extends SpinnerProps {
    height?: number;
}
/**
 * @see https://vkcom.github.io/VKUI/#/PanelSpinner
 */
export declare const PanelSpinner: React.MemoExoticComponent<({ height, style, ...restProps }: PanelSpinnerProps) => JSX.Element>;
