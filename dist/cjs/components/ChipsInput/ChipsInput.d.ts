/// <reference types="react" />
import { FormFieldProps } from "../FormField/FormField";
import { ChipOption } from "../Chip/Chip";
import { ChipsInputBaseProps } from "../ChipsInputBase/ChipsInputBase";
import "./ChipsInput.css";
export interface ChipsInputProps<Option extends ChipOption> extends ChipsInputBaseProps<Option>, FormFieldProps {
}
/**
 * @see https://vkcom.github.io/VKUI/#/ChipsInput
 */
export declare const ChipsInput: <Option extends ChipOption>({ style, className, getRootRef, before, after, status, ...restProps }: ChipsInputProps<Option>) => JSX.Element;
