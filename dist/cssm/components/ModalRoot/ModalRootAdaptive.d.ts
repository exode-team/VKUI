import * as React from "react";
import { AdaptivityContextInterface, AdaptivityProps } from "../AdaptivityProvider/AdaptivityContext";
export interface ModalRootProps extends AdaptivityProps {
    activeModal?: string | null;
    /**
     * Добавление блокировки на desktop
     */
    withDesktopLock?: boolean;
    /**
     * Будет вызвано при начале открытия активной модалки с её id
     */
    onOpen?(modalId: string): void;
    /**
     * Будет вызвано при окончательном открытии активной модалки с её id
     */
    onOpened?(modalId: string): void;
    /**
     * Будет вызвано при начале закрытия активной модалки с её id
     */
    onClose?(modalId: string): void;
    /**
     * Будет вызвано при окончательном закрытии активной модалки с её id
     */
    onClosed?(modalId: string): void;
    children?: React.ReactNode;
}
/**
 * @see https://vkcom.github.io/VKUI/#/ModalRoot
 */
export declare const ModalRoot: React.FC<Pick<ModalRootProps & AdaptivityContextInterface, "children" | "onOpen" | "onOpened" | "onClose" | "onClosed" | "activeModal" | "withDesktopLock"> & import("../AdaptivityProvider/AdaptivityContext").SizeProps>;
