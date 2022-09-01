import * as React from "react";
import type { HasRootRef, AlignType } from "../../types";
import "./ButtonGroup.css";
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
    /**
     * Задает расположение элементов внутри группы, вертикальное или горизонтальное.
     */
    mode?: "vertical" | "horizontal";
    /**
     * Выставляет в зависимости от `mode` отступ по вертикали или горизонтали.
     */
    gap?: "none" | "space" | "s" | "m";
    /**
     * Растягивает компонент на всю ширину контейнера.
     *
     * Note: Для потомков соответствующее поведение нужно определять самостоятельно, где это необходимо.
     */
    stretched?: boolean;
    /**
     * Горизонтальное выравнивание элементов внутри группы. Работает только с mode="vertical".
     */
    align?: AlignType;
}
/**
 * @see https://vkcom.github.io/VKUI/#/ButtonGroup
 */
export declare const ButtonGroup: ({ mode, gap, stretched, align, getRootRef, children, ...restProps }: ButtonGroupProps) => JSX.Element;