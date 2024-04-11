/// <reference types="react" />
import { PanelHeaderButtonProps } from "../PanelHeaderButton/PanelHeaderButton";
export interface PanelHeaderEditProps extends PanelHeaderButtonProps {
    /**
     * Включен ли режим редактирования
     */
    isActive?: boolean;
    /**
     * iOS only. Текст кнопки, когда режим редактирования не активен
     */
    editLabel?: string;
    /**
     * iOS only. Текст кнопки при активном режиме редактирования для выхода из него
     */
    doneLabel?: string;
}
/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderEdit
 */
export declare const PanelHeaderEdit: ({ isActive, editLabel, doneLabel, ...restProps }: PanelHeaderEditProps) => JSX.Element;