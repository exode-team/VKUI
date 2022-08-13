import * as React from "react";
import { HorizontalScrollProps } from "../HorizontalScroll/HorizontalScroll";
import "./SubnavigationBar.css";
export interface SubnavigationBarProps extends React.HTMLAttributes<HTMLDivElement>, Pick<HorizontalScrollProps, "showArrows" | "getScrollToLeft" | "getScrollToRight" | "scrollAnimationDuration"> {
    mode?: "fixed" | "overflow";
}
/**
 * @see https://vkcom.github.io/VKUI/#/SubnavigationBar
 */
export declare const SubnavigationBar: ({ mode, children, showArrows, getScrollToLeft, getScrollToRight, scrollAnimationDuration, ...restProps }: SubnavigationBarProps) => JSX.Element;
