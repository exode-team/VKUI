import * as React from "react";
import { CalendarHeaderProps } from "../CalendarHeader/CalendarHeader";
import { CalendarDaysProps } from "../CalendarDays/CalendarDays";
import { CalendarTimeProps } from "../CalendarTime/CalendarTime";
import { HasRootRef } from "../../types";
import "./Calendar.css";
export interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">, Pick<CalendarTimeProps, "changeHoursAriaLabel" | "changeMinutesAriaLabel">, Pick<CalendarHeaderProps, "prevMonthAriaLabel" | "nextMonthAriaLabel" | "changeMonthAriaLabel" | "changeYearAriaLabel" | "onNextMonth" | "onPrevMonth" | "prevMonthIcon" | "nextMonthIcon" | "prevMonthProps" | "nextMonthProps">, Pick<CalendarDaysProps, "dayProps" | "listenDayChangesForUpdate">, HasRootRef<HTMLDivElement> {
    value?: Date;
    disablePast?: boolean;
    disableFuture?: boolean;
    enableTime?: boolean;
    alwaysShowTime?: boolean;
    defaultTime?: Date;
    disablePickers?: boolean;
    doneButtonText?: string;
    changeDayAriaLabel?: string;
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    showNeighboringMonth?: boolean;
    size?: "s" | "m";
    onChange?(value?: Date, byCalendar?: boolean): void;
    shouldDisableDate?(value: Date): boolean;
    onClose?(): void;
    /**
     * Дата отображаемого месяца.
     * При использовании обновление даты должно происходить вне компонента.
     */
    viewDate?: Date;
    /**
     * Изменение даты в шапке календаря.
     */
    onHeaderChange?(value: Date): void;
}
/**
 * @see https://vkcom.github.io/VKUI/#/Calendar
 */
export declare const Calendar: ({ value, onChange, disablePast, disableFuture, shouldDisableDate, onClose, enableTime, doneButtonText, weekStartsOn, getRootRef, disablePickers, changeHoursAriaLabel, changeMinutesAriaLabel, prevMonthAriaLabel, nextMonthAriaLabel, changeMonthAriaLabel, changeYearAriaLabel, showNeighboringMonth, changeDayAriaLabel, size, viewDate: externalViewDate, onHeaderChange, onNextMonth, onPrevMonth, prevMonthIcon, nextMonthIcon, prevMonthProps, nextMonthProps, dayProps, alwaysShowTime, defaultTime, listenDayChangesForUpdate, ...props }: CalendarProps) => JSX.Element;