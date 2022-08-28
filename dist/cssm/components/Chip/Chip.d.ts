import * as React from "react";
import "./Chip.css";
export declare type ChipValue = string | number;
export interface ChipOption {
    value?: ChipValue;
    label?: string;
    [otherProp: string]: any;
}
export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    value: ChipValue;
    option?: ChipOption;
    onRemove?: (event?: React.MouseEvent, value?: ChipValue) => void;
    removable?: boolean;
    removeAriaLabel?: string;
    before?: React.ReactNode;
    after?: React.ReactNode;
}
export interface RenderChip<T> extends ChipProps {
    label: string;
    option: T;
    disabled: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/Chip
 */
export declare const Chip: ({ value, option, removable, onRemove, removeAriaLabel, before, after, children, ...restProps }: ChipProps) => JSX.Element;
