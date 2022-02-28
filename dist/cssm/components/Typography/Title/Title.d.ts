import * as React from "react";
import { HasComponent } from "../../../types";
import "./Title.css";
export interface TitleProps extends React.AllHTMLAttributes<HTMLElement>, HasComponent {
    /**
     * Начертания "heavy", "bold", "semibold", "medium" и "regular" устарели и будут удалены в 5.0.0.
     */
    weight?: "heavy" | "bold" | "semibold" | "medium" | "regular" | "1" | "2" | "3";
    level: "1" | "2" | "3";
}
declare const Title: React.FC<TitleProps>;
export default Title;
