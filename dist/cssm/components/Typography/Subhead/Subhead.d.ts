import * as React from "react";
import { HasComponent } from "../../../types";
import "./Subhead.css";
export interface SubheadProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
    weight: "regular" | "medium" | "semibold" | "bold";
}
declare const Subhead: React.FC<SubheadProps>;
export default Subhead;
