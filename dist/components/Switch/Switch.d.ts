/// <reference types="react" />
import { HasRootRef } from "../../types";
import { VisuallyHiddenInputProps } from "../VisuallyHiddenInput/VisuallyHiddenInput";
import "./Switch.css";
export interface SwitchProps extends VisuallyHiddenInputProps, HasRootRef<HTMLLabelElement> {
}
/**
 * @see https://vkcom.github.io/VKUI/#/Switch
 */
export declare const Switch: ({ style, className, getRootRef, ...restProps }: SwitchProps) => JSX.Element;