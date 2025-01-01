import * as React from "react";
export interface ScrollContextInterface {
    getScroll(this: void): {
        x: number;
        y: number;
    };
    scrollTo(this: void, x?: number, y?: number): void;
    isScrollLock: boolean;
    enableScrollLock(this: void): void;
    disableScrollLock(this: void): void;
    beforeScrollLockFnSetRef?: React.RefObject<Set<() => void>>;
}
export declare const ScrollContext: React.Context<ScrollContextInterface>;
export declare const useScroll: () => ScrollContextInterface;
export interface ScrollControllerProps {
    elRef: React.RefObject<HTMLElement>;
    children?: React.ReactNode;
}
export declare const GlobalScrollController: ({ children }: ScrollControllerProps) => JSX.Element;
export declare const ElementScrollController: ({ elRef, children, }: ScrollControllerProps) => JSX.Element;
/**
 * Вызывает функцию effect, до блокировки прокрутки
 * @param effect функция, которая может возвращать функцию очистки
 * @param deps effect обновится только при изменении значений в списке.
 */
export declare const useScrollLockEffect: (effect: React.EffectCallback, deps: React.DependencyList) => void;
export declare const useScrollLock: (enabled?: boolean, withDesktopLock?: boolean) => void;
