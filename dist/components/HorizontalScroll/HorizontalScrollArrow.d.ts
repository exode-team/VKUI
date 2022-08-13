/// <reference types="react" />
import "./HorizontalScrollArrow.css";
export interface HorizontalScrollArrowProps {
    direction: "left" | "right";
    size?: "m" | "l";
    onClick(): void;
}
export declare const HorizontalScrollArrow: ({ size, direction, onClick, ...restProps }: HorizontalScrollArrowProps) => JSX.Element;
