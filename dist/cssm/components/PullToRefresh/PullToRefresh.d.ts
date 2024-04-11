import * as React from "react";
import { AnyFunction, HasPlatform } from "../../types";
import { DOMProps } from "../../lib/dom";
import { ScrollContextInterface } from "../AppRoot/ScrollContext";
import { TouchProps } from "../Touch/Touch";
export interface PullToRefreshProps extends DOMProps, TouchProps, HasPlatform {
    /**
     * Будет вызвана для обновления контента (прим.: функция должна быть мемоизированным коллбэком)
     */
    onRefresh: AnyFunction;
    /**
     * Определяет, выполняется ли обновление. Для скрытия спиннера после получения контента необходимо передать `false`
     */
    isFetching?: boolean;
    /** @ignore */
    scroll?: ScrollContextInterface;
    children?: React.ReactNode;
}
/**
 * @see https://vkcom.github.io/VKUI/#/PullToRefresh
 */
export declare const PullToRefresh: ({ children, isFetching, onRefresh, ...restProps }: PullToRefreshProps) => JSX.Element;