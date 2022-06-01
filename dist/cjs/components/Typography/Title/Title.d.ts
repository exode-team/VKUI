import * as React from "react";
import { HasComponent } from "../../../types";
import "./Title.css";
export interface TitleProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
    /**
     * Задаёт начертание шрифта отличное от стандартного.
     *
     * > ⚠️ Начертания `"heavy"`, `"bold"`, `"semibold"`, `medium` и `"regular"` устарели и будут удалены в 5.0.0. Используйте значения `"1"`, `"2"` и `"3"`.
     */
    weight?: "heavy" | "bold" | "semibold" | "medium" | "regular" | "1" | "2" | "3";
    level: "1" | "2" | "3";
}
/**
 * @see https://vkcom.github.io/VKUI/#/Title
 */
export declare const Title: React.FC<TitleProps>;
