import * as React from "react";
import { HasComponent } from "../../../types";
import "./Subhead.css";
export interface SubheadProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
    /**
     * Задаёт начертание шрифта отличное от стандартного.
     *
     * > ⚠️ Начертания `"semibold"`, `medium` и `"regular"` устарели и будут удалены в 5.0.0. Используйте значения `"1"`, `"2"` и `"3"`.
     */
    weight?: "regular" | "medium" | "semibold" | "bold" | "1" | "2" | "3";
}
/**
 * @see https://vkcom.github.io/VKUI/#/Subhead
 */
export declare const Subhead: React.FC<SubheadProps>;