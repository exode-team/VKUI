import * as React from "react";
import { HasRef, HasRootRef } from "../../types";
import "./WriteBar.css";
export interface WriteBarProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, HasRootRef<HTMLDivElement>, HasRef<HTMLTextAreaElement> {
    /**
     * Содержимое, отображаемое слева от поля ввода.
     */
    before?: React.ReactNode;
    /**
     * Содержимое, отображаемое поверх поля ввода (актуально для iOS)
     */
    inlineAfter?: React.ReactNode;
    /**
     * Содержимое, отображаемое справа от поля ввода
     */
    after?: React.ReactNode;
    /**
     * Вызывается при смене высоты поля ввода
     */
    onHeightChange?: VoidFunction;
    /**
     * Добавляет тень вокруг поля ввода
     */
    shadow?: boolean;
    children?: never;
}
/**
 * @see https://vkcom.github.io/VKUI/#/WriteBar
 */
export declare const WriteBar: ({ className, style, before, inlineAfter, after, value, onChange, getRootRef, getRef, onHeightChange, shadow, ...restProps }: WriteBarProps) => JSX.Element;
