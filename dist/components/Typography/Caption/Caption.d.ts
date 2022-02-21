import * as React from "react";
import { HasComponent } from "../../../types";
import "./Caption.css";
export interface CaptionProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
    weight: "regular" | "medium" | "semibold" | "bold";
    level: "1" | "2" | "3" | "4";
    caps?: boolean;
}
declare const Caption: React.FC<CaptionProps>;
export default Caption;
