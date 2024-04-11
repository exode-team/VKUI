import * as React from "react";
import { TappableElementProps } from "../Tappable/Tappable";
import "./CalendarHeader.css";
declare type ArrowMonthProps = Omit<TappableElementProps, "onClick" | "aria-label">;
export interface CalendarHeaderProps extends Pick<React.HTMLAttributes<HTMLDivElement>, "className"> {
    viewDate: Date;
    prevMonth?: boolean;
    nextMonth?: boolean;
    disablePickers?: boolean;
    prevMonthAriaLabel?: string;
    nextMonthAriaLabel?: string;
    changeMonthAriaLabel?: string;
    changeYearAriaLabel?: string;
    prevMonthIcon?: React.ReactNode;
    nextMonthIcon?: React.ReactNode;
    prevMonthProps?: ArrowMonthProps;
    nextMonthProps?: ArrowMonthProps;
    onChange(viewDate: Date): void;
    /**
     * Нажатие на кнопку переключения на следующий месяц.
     */
    onNextMonth?(): void;
    /**
     * Нажатие на кнопку переключения на предыдущий месяц.
     */
    onPrevMonth?(): void;
}
export declare const CalendarHeader: ({ viewDate, onChange, prevMonth, nextMonth, disablePickers, onNextMonth, onPrevMonth, className, prevMonthProps, nextMonthProps, prevMonthAriaLabel, nextMonthAriaLabel, changeMonthAriaLabel, changeYearAriaLabel, prevMonthIcon, nextMonthIcon, }: CalendarHeaderProps) => JSX.Element;
export {};