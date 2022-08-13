import * as React from "react";
import "./CalendarDay.css";
export interface CalendarDayProps {
    day: Date;
    today?: boolean;
    selected?: boolean;
    selectionStart?: boolean;
    selectionEnd?: boolean;
    hintedSelectionStart?: boolean;
    hintedSelectionEnd?: boolean;
    active?: boolean;
    hidden?: boolean;
    disabled?: boolean;
    focused?: boolean;
    hinted?: boolean;
    sameMonth?: boolean;
    size?: "s" | "m";
    onChange(value: Date): void;
    onEnter?(value: Date): void;
    onLeave?(value: Date): void;
}
export declare const CalendarDay: React.MemoExoticComponent<({ day, today, selected, onChange, hidden, disabled, active, selectionStart, selectionEnd, focused, onEnter, onLeave, hinted, hintedSelectionStart, hintedSelectionEnd, sameMonth, size, }: CalendarDayProps) => JSX.Element>;
