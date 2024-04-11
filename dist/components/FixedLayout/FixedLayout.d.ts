import * as React from "react";
import { HasRef, HasRootRef } from "../../types";
import "./FixedLayout.css";
export interface FixedLayoutProps extends React.HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement>, HasRef<HTMLDivElement> {
    vertical?: "top" | "bottom";
    /**
     * Это свойство определяет, будет ли фон компонента окрашен в цвет фона контента.
     * Это часто необходимо для фиксированных кнопок в нижней части экрана.
     */
    filled?: boolean;
}
export interface FixedLayoutState {
    position: "absolute" | null;
    top: number;
    bottom: number;
    width: string;
}
/**
 * @see https://vkcom.github.io/VKUI/#/FixedLayout
 */
export declare const FixedLayout: ({ children, style, vertical, getRootRef, getRef, filled, ...restProps }: FixedLayoutProps) => JSX.Element;