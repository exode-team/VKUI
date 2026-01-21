/**
 * Karakalpak locale for dayjs
 *
 * @author: exode <hello@exode.ru>
 */
declare const qaLocale: {
    name: string;
    weekdays: string[];
    weekdaysShort: string[];
    weekdaysMin: string[];
    months: string[];
    monthsShort: string[];
    weekStart: number;
    formats: {
        LT: string;
        LTS: string;
        L: string;
        LL: string;
        LLL: string;
        LLLL: string;
    };
    relativeTime: {
        future: string;
        past: string;
        s: string;
        m: string;
        mm: string;
        h: string;
        hh: string;
        d: string;
        dd: string;
        M: string;
        MM: string;
        y: string;
        yy: string;
    };
    ordinal: (n: number) => string;
};
export default qaLocale;
