import * as React from "react";
import { CalendarProps } from "../Calendar/Calendar";
import { Placement } from "../Popper/Popper";
import { FormFieldProps } from "../FormField/FormField";
import { HasRootRef } from "../../types";
import "./DateInput.css";
export interface DateInputProps extends Omit<React.InputHTMLAttributes<HTMLDivElement>, "value" | "onChange" | "size">, Pick<CalendarProps, "disablePast" | "disableFuture" | "enableTime" | "shouldDisableDate" | "onChange" | "value" | "doneButtonText" | "weekStartsOn" | "disablePickers" | "changeHoursAriaLabel" | "changeMinutesAriaLabel" | "prevMonthAriaLabel" | "nextMonthAriaLabel" | "changeMonthAriaLabel" | "changeYearAriaLabel" | "changeDayAriaLabel" | "showNeighboringMonth" | "size" | "viewDate" | "onHeaderChange" | "onNextMonth" | "onPrevMonth" | "prevMonthIcon" | "nextMonthIcon" | "alwaysShowTime" | "defaultTime">, HasRootRef<HTMLDivElement>, FormFieldProps {
    calendarPlacement?: Placement;
    closeOnChange?: boolean;
    clearFieldAriaLabel?: string;
    showCalendarAriaLabel?: string;
    disableCalendar?: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/DateInput
 */
export declare const DateInput: ({ enableTime, shouldDisableDate, disableFuture, disablePast, value, onChange, calendarPlacement, style, className, doneButtonText, closeOnChange, disablePickers, getRootRef, name, autoFocus, disabled, onClick, onFocus, prevMonthAriaLabel, nextMonthAriaLabel, showNeighboringMonth, size, changeMonthAriaLabel, changeYearAriaLabel, changeDayAriaLabel, changeHoursAriaLabel, changeMinutesAriaLabel, clearFieldAriaLabel, showCalendarAriaLabel, viewDate, onHeaderChange, onNextMonth, onPrevMonth, prevMonthIcon, nextMonthIcon, alwaysShowTime, defaultTime, disableCalendar, ...props }: DateInputProps) => JSX.Element;