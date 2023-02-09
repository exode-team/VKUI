declare type DirtyDate = Date | number;
export declare function startOfDay(date: DirtyDate): Date;
export declare function endOfDay(date: DirtyDate): Date;
export declare function startOfWeek(date: DirtyDate, weekStart?: number): Date;
export declare function endOfWeek(date: DirtyDate, weekStart?: number): Date;
export declare function startOfMonth(date: DirtyDate): Date;
export declare function endOfMonth(date: DirtyDate): Date;
export declare function isFirstDayOfMonth(date: DirtyDate): boolean;
export declare function isLastDayOfMonth(date: DirtyDate): boolean;
export declare function format(date: DirtyDate, format: string): string;
export declare function isBefore(date1: DirtyDate, date2: DirtyDate): boolean;
export declare function isAfter(date1: DirtyDate, date2: DirtyDate): boolean;
export declare function isSameDay(date1: DirtyDate, date2: DirtyDate): boolean;
export declare function isSameMonth(date1: DirtyDate, date2: DirtyDate): boolean;
export declare function isWithinInterval(date: DirtyDate, start: DirtyDate, end: DirtyDate): boolean;
export declare function setMinutes(date: DirtyDate, minute: number): Date;
export declare function setHours(date: DirtyDate, hour: number): Date;
export declare function setMonth(date: DirtyDate, month: number): Date;
export declare function setYear(date: DirtyDate, year: number): Date;
export declare function addDays(date: DirtyDate, day: number): Date;
export declare function subDays(date: DirtyDate, day: number): Date;
export declare function addWeeks(date: DirtyDate, week: number): Date;
export declare function subWeeks(date: DirtyDate, week: number): Date;
export declare function addMonths(date: DirtyDate, month: number): Date;
export declare function subMonths(date: DirtyDate, month: number): Date;
export declare function eachDayOfInterval(start: DirtyDate, end: DirtyDate): Date[];
export declare function parse(input: string, format: string, referenceDate?: Date): Date;
export declare function isMatch(input: string, format: string): boolean;
export declare function getMillisecondsToTomorrow(date: DirtyDate): number;
export {};
