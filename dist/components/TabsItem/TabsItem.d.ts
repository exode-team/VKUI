import * as React from "react";
import "./TabsItem.css";
export interface TabsItemProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Добавляет иконку слева.
     *
     * - Для `mode="default"` используйте иконки размером 24.
     * - Для всех остальных `mode` используйте иконки размером 20.
     */
    before?: React.ReactNode;
    /**
     * Добавляет элемент слева от `after`.
     *
     * - `React.ReactElement` – либо [`Badge`](https://vkcom.github.io/VKUI/#/Badge) с параметром `mode="prominent"`.
     *   либо [`Counter`](https://vkcom.github.io/VKUI/#/Counter) с параметрами `mode="prominent" size="s"`.
     * - `number` – для показа текстового блока с переданным числом.
     */
    status?: React.ReactElement | number;
    /**
     * Добавляет иконку справа.
     *
     * Например, `<Icon16Dropdown />`
     */
    after?: React.ReactNode;
    selected?: boolean;
    disabled?: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/TabsItem
 */
export declare const TabsItem: ({ before, children, status, after, selected, ...restProps }: TabsItemProps) => JSX.Element;