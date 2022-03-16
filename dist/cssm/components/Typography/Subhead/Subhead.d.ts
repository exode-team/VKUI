import * as React from "react";
import { HasComponent } from "../../../types";
import "./Subhead.css";
export interface SubheadProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
    /**
     * Начертания "regular", "medium", "semibold" и "bold" устарели и будут удалены в 5.0.0.
     */
    weight?: "regular" | "medium" | "semibold" | "bold" | "1" | "2" | "3";
}
declare const Subhead: React.FC<SubheadProps>;
export default Subhead;
