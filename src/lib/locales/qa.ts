/**
 * Karakalpak locale for dayjs
 *
 * @author: exode <hello@exode.ru>
 */

import dayjs from "dayjs";

const qaLocale = {
    name: "qa",
    weekdays: "Yekşembi_Dúyşembi_Siyşembi_Sárşembi_Piyşembi_Juma_Şembi".split("_"),
    weekdaysShort: "Yek_Dúy_Siy_Sár_Piy_Jum_Şem".split("_"),
    weekdaysMin: "Ye_Dú_Si_Sá_Pi_Ju_Şe".split("_"),
    months: "Qañtar_Fevral_Mart_Aprel_May_İyun_İyul_Avgust_Sentyabr_Oktyabr_Noyabr_Dekabr".split("_"),
    monthsShort: "Qañ_Fev_Mar_Apr_May_İyu_İyl_Avg_Sen_Okt_Noy_Dek".split("_"),
    weekStart: 1,
    formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD.MM.YYYY",
        LL: "D MMMM YYYY",
        LLL: "D MMMM YYYY HH:mm",
        LLLL: "dddd, D MMMM YYYY HH:mm",
    },
    relativeTime: {
        future: "%s keyin",
        past: "%s burın",
        s: "birneshe sekund",
        m: "bir minut",
        mm: "%d minut",
        h: "bir saǧat",
        hh: "%d saǧat",
        d: "bir kún",
        dd: "%d kún",
        M: "bir ay",
        MM: "%d ay",
        y: "bir jıl",
        yy: "%d jıl",
    },
    ordinal: (n: number) => {
        return `${n}`;
    },
};

dayjs.locale(qaLocale, undefined, true);

export default qaLocale;
