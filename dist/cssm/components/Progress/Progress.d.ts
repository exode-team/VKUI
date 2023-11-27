import * as React from "react";
import { HasRootRef } from "../../types";
import "./Progress.css";
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
    value?: number;
    children?: React.ReactNode;
    permanentChildren?: React.ReactNode;
}
/**
 * @see https://vkcom.github.io/VKUI/#/Progress
 */
export declare const Progress: ({ value, getRootRef, children, permanentChildren, ...restProps }: ProgressProps) => JSX.Element;
