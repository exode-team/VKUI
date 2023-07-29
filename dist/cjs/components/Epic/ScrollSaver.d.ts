import * as React from "react";
export interface ScrollSaverProps {
    initialScroll?: number;
    saveScroll: (scroll: number) => any;
    children?: React.ReactNode;
}
/**
 * @see https://vkcom.github.io/VKUI/#/ScrollSaver
 */
export declare const ScrollSaver: ({ children, initialScroll, saveScroll, }: ScrollSaverProps) => JSX.Element;
