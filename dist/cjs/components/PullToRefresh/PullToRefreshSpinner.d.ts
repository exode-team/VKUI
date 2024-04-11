import * as React from "react";
import "./PullToRefresh.css";
export interface PullToRefreshSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: number;
    strokeWidth?: number;
    on?: boolean;
    progress?: number;
    "aria-label"?: string;
}
export declare const PullToRefreshSpinner: ({ on, size, strokeWidth, style, progress, "aria-label": ariaLabel, }: PullToRefreshSpinnerProps) => JSX.Element;