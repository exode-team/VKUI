import * as React from "react";
import { HasComponent } from "../../../types";
import "./Caption.css";
export interface CaptionProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
    /**
     * Задаёт начертание шрифта отличное от стандартного.
     *
     * > ⚠️ Начертания `"bold"`, `"semibold"`, `medium` и `"regular"` устарели и будут удалены в 5.0.0. Используйте значения `"1"`, `"2"` и `"3"`.
     */
    weight?: "regular" | "medium" | "semibold" | "bold" | "1" | "2" | "3";
    level?: "1" | "2" | "3" | "4";
    caps?: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/Caption
 */
export declare const Caption: ({ children, weight, level, caps, Component, ...restProps }: CaptionProps) => JSX.Element;
