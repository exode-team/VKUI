import * as React from "react";
import "./PanelHeaderContent.css";
export interface PanelHeaderContentProps extends React.HTMLAttributes<HTMLDivElement> {
    aside?: React.ReactNode;
    before?: React.ReactNode;
    status?: React.ReactNode;
}
/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderContent
 */
declare const PanelHeaderContent: React.FunctionComponent<PanelHeaderContentProps>;
export default PanelHeaderContent;
