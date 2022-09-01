import * as React from "react";
import { HorizontalScrollProps } from "../HorizontalScroll/HorizontalScroll";
import "./CardScroll.css";
export interface CardScrollProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * При `size=false` ширина `Card` будет регулироваться контентом внутри. В остальных случаях — будет явно задана в процентах.
     */
    size?: "s" | "m" | "l" | false;
    showArrows?: HorizontalScrollProps["showArrows"];
    withSpaces?: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/CardScroll
 */
export declare const CardScroll: ({ children, size, showArrows, withSpaces, ...restProps }: CardScrollProps) => JSX.Element;