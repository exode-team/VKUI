import * as React from "react";
import { Placement } from "@popperjs/core";
import { HasRootRef } from "../../types";
import "./Tooltip.css";
export interface TooltipProps {
    /**
     * **Важно**: если в `children` передан React-компонент, то необходимо убедиться в том, что он поддерживает
     * свойство `getRootRef`, которое должно возвращаться ссылку на корневой DOM-элемент компонента,
     * иначе тултип показан не будет. Если передан React-element, то такой проблемы нет.
     */
    children: React.ReactElement<HasRootRef<any>> | React.ReactElement<React.PropsWithRef<any>>;
    /**
     * @deprecated будет удалено в 5.0.0, устанавливать стиль следует через appearance
     * Стиль отображения подсказки
     */
    mode?: "accent" | "light";
    /**
     * Стиль отображения подсказки
     */
    appearance?: "accent" | "neutral" | "white" | "black" | "inversion";
    /**
     * Если передан `false`, то рисуется просто `children`.
     */
    isShown?: boolean;
    /**
     * Текст тултипа.
     */
    text?: React.ReactNode;
    /**
     * Заголовок тултипа.
     */
    header?: React.ReactNode;
    /**
     * Положение по горизонтали (прижатие к левому или правому краю `children`).
     * Если не задано, позиция по горизонтали определятся автоматически
     */
    alignX?: "center" | "left" | "right";
    /**
     * Положение по вертикали (расположение над или под `children`).
     * Если не задано, позиция по вертикали определятся автоматически
     */
    alignY?: "top" | "bottom";
    /**
     * Сдвиг по горизонтали (относительно портала, в котором рисуется тултип).
     */
    offsetX?: number;
    /**
     * Сдвиг по вертикали (относительно портала, в котором рисуется тултип).
     */
    offsetY?: number;
    /**
     * Отображать ли стрелку, указывающую на якорный элемент
     */
    arrow?: boolean;
    /**
     * Сдвиг стрелочки относительно центра дочернего элемента.
     */
    cornerOffset?: number;
    /**
     * Сдвиг стрелочки относительно ширины тултипа
     */
    cornerAbsoluteOffset?: number;
    /**
     * Callback, который вызывается при клике по любому месту в пределах экрана.
     */
    onClose?: () => void;
    /**
     * По умолчанию компонент выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства
     */
    placement?: Placement;
}
/**
 * @see https://vkcom.github.io/VKUI/#/Tooltip
 */
export declare const Tooltip: ({ children, isShown: _isShown, offsetX, offsetY, alignX, alignY, onClose, cornerOffset, cornerAbsoluteOffset, mode, appearance, arrow, placement, ...restProps }: TooltipProps) => JSX.Element;
