import * as React from "react";
import { HasPlatform } from "../../types";
import { ConfigProviderContextInterface } from "../ConfigProvider/ConfigProviderContext";
import "./ModalRoot.css";
export interface ModalRootProps extends HasPlatform {
    activeModal?: string | null;
    /**
     * @ignore
     */
    configProvider?: ConfigProviderContextInterface;
    children?: React.ReactNode;
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
}
export declare const ModalRootDesktop: React.FC<Pick<ModalRootProps, "children" | "onOpen" | "onOpened" | "onClose" | "onClosed" | "activeModal" | "configProvider">>;
