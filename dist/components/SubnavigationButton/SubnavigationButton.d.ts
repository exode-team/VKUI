import * as React from "react";
import { TappableProps } from "../Tappable/Tappable";
import "./SubnavigationButton.css";
export interface SubnavigationButtonProps extends Omit<TappableProps, "size"> {
    mode?: "primary" | "outline" | "tertiary";
    size?: "s" | "m" | "l";
    selected?: boolean;
    /**
     * Размер шрифта. Этим свойством рекомендуется пользоваться, чтобы отрегулировать размер шрифта у кнопок в `<SubnavigationBar mode="fixed" />`
     */
    textLevel?: 1 | 2 | 3;
    /**
     * Рекомендуется использовать только иконки с размером 24
     */
    before?: React.ReactNode;
    /**
     * Рекомендуется использовать только `<Counter size="s" />` или `<Badge />`
     */
    after?: React.ReactNode;
    expandable?: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/SubnavigationButton
 */
export declare const SubnavigationButton: ({ mode, size, selected, textLevel, before, after, expandable, children, ...restProps }: SubnavigationButtonProps) => JSX.Element;
