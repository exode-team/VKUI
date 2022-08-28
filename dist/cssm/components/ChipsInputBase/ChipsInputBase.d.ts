import * as React from "react";
import { HasAlign, HasRef, HasRootRef } from "../../types";
import { ChipOption, ChipValue, RenderChip } from "../Chip/Chip";
import "./ChipsInputBase.css";
export interface ChipsInputBaseProps<Option extends ChipOption> extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">, HasRef<HTMLInputElement>, HasRootRef<HTMLDivElement>, HasAlign {
    value: Option[];
    inputValue?: string;
    onChange?: (o: Option[]) => void;
    onInputChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
    getOptionValue?: (o?: Option) => ChipValue;
    getOptionLabel?: (o?: Option) => string;
    getNewOptionData?: (v?: ChipValue, l?: string) => Option;
    renderChip?: (props?: RenderChip<Option>) => React.ReactNode;
    inputAriaLabel?: string;
}
export declare const chipsInputDefaultProps: ChipsInputBaseProps<any>;
export declare const ChipsInputBase: <Option extends ChipOption>(props: ChipsInputBaseProps<Option>) => JSX.Element;
