import * as React from "react";
import { HasComponent, HasRef, HasRootRef } from "../../types";
import "./HorizontalCell.css";
export interface HorizontalCellProps extends React.AnchorHTMLAttributes<HTMLElement>, HasRootRef<HTMLDivElement>, HasRef<HTMLDivElement>, HasComponent {
    size?: "s" | "m" | "l";
    header?: React.ReactNode;
    subtitle?: React.ReactNode;
    disabled?: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/HorizontalCell
 */
export declare const HorizontalCell: ({ className, header, style, subtitle, size, children, getRootRef, getRef, ...restProps }: HorizontalCellProps) => JSX.Element;
