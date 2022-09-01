import * as React from "react";
import { CalendarRangeProps } from "../CalendarRange/CalendarRange";
import { Placement } from "../Popper/Popper";
import { HasRootRef } from "../../types";
import { FormFieldProps } from "../FormField/FormField";
import "./DateRangeInput.css";
export interface DateRangeInputProps extends Omit<React.InputHTMLAttributes<HTMLDivElement>, "value" | "onChange">, Pick<CalendarRangeProps, "disablePast" | "disableFuture" | "shouldDisableDate" | "onChange" | "value" | "weekStartsOn" | "disablePickers" | "prevMonthAriaLabel" | "nextMonthAriaLabel" | "changeMonthAriaLabel" | "changeYearAriaLabel" | "changeDayAriaLabel" | "prevMonthIcon" | "nextMonthIcon">, HasRootRef<HTMLDivElement>, FormFieldProps {
    calendarPlacement?: Placement;
    closeOnChange?: boolean;
    clearFieldAriaLabel?: string;
    showCalendarAriaLabel?: string;
    changeStartDayAriaLabel?: string;
    changeStartMonthAriaLabel?: string;
    changeStartYearAriaLabel?: string;
    changeEndDayAriaLabel?: string;
    changeEndMonthAriaLabel?: string;
    changeEndYearAriaLabel?: string;
    disableCalendar?: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/DateRangeInput
 */
export declare const DateRangeInput: ({ shouldDisableDate, disableFuture, disablePast, value, onChange, calendarPlacement, style, className, closeOnChange, disablePickers, getRootRef, name, autoFocus, disabled, onClick, onFocus, prevMonthAriaLabel, nextMonthAriaLabel, changeDayAriaLabel, changeMonthAriaLabel, changeYearAriaLabel, changeStartDayAriaLabel, changeStartMonthAriaLabel, changeStartYearAriaLabel, changeEndDayAriaLabel, changeEndMonthAriaLabel, changeEndYearAriaLabel, clearFieldAriaLabel, showCalendarAriaLabel, prevMonthIcon, nextMonthIcon, disableCalendar, ...props }: DateRangeInputProps) => JSX.Element;