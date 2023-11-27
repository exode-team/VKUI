import * as React from "react";
import { HasRootRef } from "../../types";
import "./Progress.css";
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
    value?: number;
    children?: React.ReactNode;
}
/**
 * @see https://vkcom.github.io/VKUI/#/Progress
 */
export declare const Progress: ({ value, getRootRef, children, ...restProps }: ProgressProps) => JSX.Element;
