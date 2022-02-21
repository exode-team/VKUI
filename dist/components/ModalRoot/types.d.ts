export declare enum ModalType {
    PAGE = "page",
    CARD = "card"
}
export declare type TranslateRange = [number, number];
export declare type ModalsState = {
    [index: string]: ModalsStateEntry;
};
export interface ModalElements {
    modalElement?: HTMLElement | null;
    innerElement?: HTMLElement | null;
    headerElement?: HTMLElement | null;
    contentElement?: HTMLElement | null;
}
export interface ModalsStateEntry extends ModalElements {
    id: string | null;
    onClose?: () => any;
    type?: ModalType;
    settlingHeight?: number;
    dynamicContentHeight?: boolean;
    expandable?: boolean;
    /**
     * Процент текущего сдвига модалки
     */
    translateY?: number;
    /**
     * Процент сдвига модалки в изначальном состоянии
     */
    translateYFrom?: number;
    /**
     * Процент сдвига модалки во время взаимодействия с ней (потянуть, чтобы открыть или закрыть)
     */
    translateYCurrent?: number;
    touchStartContentScrollTop?: number;
    touchMovePositive?: boolean | null;
    touchShiftYPercent?: number;
    expanded?: boolean;
    collapsed?: boolean;
    hidden?: boolean;
    contentScrolled?: boolean;
    contentScrollStopTimeout?: ReturnType<typeof setTimeout>;
    expandedRange?: TranslateRange;
    collapsedRange?: TranslateRange;
    hiddenRange?: TranslateRange;
}