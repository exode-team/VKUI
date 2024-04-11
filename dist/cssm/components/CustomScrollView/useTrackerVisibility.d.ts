/**
 * Хук, который позволяет управлять видимостью ползунка скроллбара.
 * @param autoHideScrollbar - скрывать ли ползунок скроллбара
 * @param autoHideScrollbarDelay - через какое кол-во миллисекунд ползунок скроллбара скрывается
 * @returns Объект, содержащий параметры, которые позволяют управлять видимостью ползунка
 */
export declare const useTrackerVisibility: (autoHideScrollbar?: boolean, autoHideScrollbarDelay?: number) => TrackerVisibilityProps;
export interface TrackerOptionsProps {
    /**
     * Скрывать ли ползунок скроллбара
     */
    autoHideScrollbar?: boolean;
    /**
     * Через какое кол-во миллисекунд ползунок скроллбара скрывается
     */
    autoHideScrollbarDelay?: number;
}
export interface TrackerVisibilityProps {
    /**
     * Отвечает за видимость ползунка
     */
    trackerVisible: boolean;
    /**
     * Функция для обработки события у блока со скроллом
     */
    onTargetScroll(this: void): void;
    /**
     * Функция для обработки начала drag event ползунка
     */
    onTrackerDragStart(this: void): void;
    /**
     * Функция для обработки окончания drag event ползунка
     */
    onTrackerDragStop(this: void): void;
    /**
     * Функция для обработки mouseLeave event ползунка
     */
    onTrackerMouseEnter(this: void): void;
    /**
     * Функция для обработки mouseEnter event ползунка
     */
    onTrackerMouseLeave(this: void): void;
}