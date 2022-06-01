import * as React from "react";
import { HasRef } from "../../types";
import { PanelHeaderProps } from "../PanelHeader/PanelHeader";
import "./ModalPageHeader.css";
export interface ModalPageHeaderProps extends React.HTMLAttributes<HTMLDivElement>, Omit<PanelHeaderProps, "fixed" | "shadow">, HasRef<HTMLDivElement> {
}
/**
 * @see https://vkcom.github.io/VKUI/#/ModalPageHeader
 */
declare const ModalPageHeader: React.FunctionComponent<ModalPageHeaderProps>;
export default ModalPageHeader;
