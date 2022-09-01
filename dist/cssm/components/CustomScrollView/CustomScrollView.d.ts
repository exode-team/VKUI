import * as React from "react";
import { DOMProps } from "../../lib/dom";
import { TrackerOptionsProps } from "./useTrackerVisibility";
import "./CustomScrollView.css";
export interface CustomScrollViewProps extends DOMProps, TrackerOptionsProps {
    windowResize?: boolean;
    boxRef?: React.Ref<HTMLDivElement>;
    className?: HTMLDivElement["className"];
    children: React.ReactNode;
}
export declare const CustomScrollView: ({ className, children, boxRef: externalBoxRef, windowResize, autoHideScrollbar, autoHideScrollbarDelay, }: CustomScrollViewProps) => JSX.Element;