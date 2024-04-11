import * as React from "react";
import { HasComponent, HasRootRef } from "../../types";
export interface FocusTrapProps extends React.AllHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasComponent {
    restoreFocus?: boolean;
    timeout?: number;
    onClose?(): void;
}
/**
 * @see https://vkcom.github.io/VKUI/#/FocusTrap
 */
export declare const FocusTrap: ({ Component, onClose, restoreFocus, timeout, getRootRef, children, ...restProps }: FocusTrapProps) => JSX.Element;