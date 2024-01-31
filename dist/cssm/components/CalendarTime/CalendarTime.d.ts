/// <reference types="react" />
import "./CalendarTime.css";
export interface CalendarTimeProps {
    value: Date;
    doneButtonText?: string;
    changeHoursAriaLabel?: string;
    changeMinutesAriaLabel?: string;
    onChange?(value: Date): void;
    onClose?(): void;
    buttonDisabled?: boolean;
}
export declare const CalendarTime: ({ value, doneButtonText, onChange, onClose, buttonDisabled, changeHoursAriaLabel, changeMinutesAriaLabel, }: CalendarTimeProps) => JSX.Element;
