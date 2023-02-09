/// <reference types="react" />
import { HoverPopperProps } from "../HoverPopper/HoverPopper";
import "./RichTooltip.css";
export interface RichTooltipProps extends Omit<HoverPopperProps, "arrowClassName"> {
    /**
     * Стиль отображения подсказки
     */
    appearance?: "accent" | "neutral" | "white" | "black" | "inversion";
}
/**
 * @see https://vkcom.github.io/VKUI/#/RichTooltip
 */
export declare const RichTooltip: ({ children, arrow, appearance, ...popperProps }: RichTooltipProps) => JSX.Element;
