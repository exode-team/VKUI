import * as React from "react";
import { Modifier } from "react-popper";
import { HasRef } from "../../types";
import "./Popper.css";
export declare type Placement = "auto" | "auto-start" | "auto-end" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "top" | "bottom" | "left" | "right";
export interface PopperRenderContentProps {
    className: string;
}
export interface PopperCommonProps extends React.HTMLAttributes<HTMLDivElement>, HasRef<HTMLDivElement> {
    /**
     * По умолчанию компонент выберет наилучшее расположение сам. Но его можно задать извне с помощью этого свойства
     */
    placement?: Placement;
    /**
     * Отступ по вспомогательной оси
     */
    offsetSkidding?: number;
    /**
     * Отступ по главной оси
     */
    offsetDistance?: number;
    /**
     * Отображать ли стрелку, указывающую на якорный элемент
     */
    arrow?: boolean;
    /**
     * Стиль стрелки
     */
    arrowClassName?: string;
    /**
     * Выставлять ширину равной target элементу
     */
    sameWidth?: boolean;
    forcePortal?: boolean;
    onPlacementChange?: (data: {
        placement?: Placement;
    }) => void;
    /**
     * Массив кастомных модификаторов для Popper (необходимо мемоизировать)
     */
    customModifiers?: Array<Modifier<string>>;
    /**
     * При передаче содержимого в `children`, он будет обёрнут во внутренний контейнер.
     *
     * Если хочется управлять этим контейнером, то используйте данную функцию.
     *
     * > ⚠️ Параметр `children` будет проигнорирован.
     */
    renderContent?(props: PopperRenderContentProps): React.ReactNode;
}
export interface PopperProps extends PopperCommonProps {
    targetRef: React.RefObject<HTMLElement>;
}
/**
 * @see https://vkcom.github.io/VKUI/#/Popper
 */
export declare const Popper: ({ targetRef, children, getRef, placement, onPlacementChange, arrow, arrowClassName, sameWidth, offsetDistance, offsetSkidding, forcePortal, style: compStyles, customModifiers, renderContent, ...restProps }: PopperProps) => JSX.Element;
