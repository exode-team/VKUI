import * as React from "react";
import { CalendarHeaderProps } from "../CalendarHeader/CalendarHeader";
import { CalendarDaysProps } from "../CalendarDays/CalendarDays";
import { HasRootRef } from "../../types";
import "./CalendarRange.css";
export interface CalendarRangeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">, Pick<CalendarHeaderProps, "prevMonthAriaLabel" | "nextMonthAriaLabel" | "changeMonthAriaLabel" | "changeYearAriaLabel" | "prevMonthIcon" | "nextMonthIcon">, Pick<CalendarDaysProps, "listenDayChangesForUpdate">, HasRootRef<HTMLDivElement> {
    value?: Array<Date | null>;
    disablePast?: boolean;
    disableFuture?: boolean;
    disablePickers?: boolean;
    changeDayAriaLabel?: string;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    onChange?(value?: Array<Date | null>): void;
    shouldDisableDate?(value: Date): boolean;
    onClose?(): void;
}
/**
 * @see https://vkcom.github.io/VKUI/#/CalendarRange
 */
export declare const CalendarRange: ({ value, onChange, disablePast, disableFuture, shouldDisableDate, onClose, weekStartsOn, getRootRef, disablePickers, prevMonthAriaLabel, nextMonthAriaLabel, changeMonthAriaLabel, changeYearAriaLabel, changeDayAriaLabel, prevMonthIcon, nextMonthIcon, listenDayChangesForUpdate, ...props }: CalendarRangeProps) => JSX.Element;
