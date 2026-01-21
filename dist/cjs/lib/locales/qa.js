"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _dayjs = _interopRequireDefault(require("dayjs"));
/**
 * Karakalpak locale for dayjs
 *
 * @author: exode <hello@exode.ru>
 */

var qaLocale = {
  name: "qa",
  weekdays: "Yekşembi_Dúyşembi_Siyşembi_Sárşembi_Piyşembi_Juma_Şembi".split("_"),
  weekdaysShort: "Yek_Dúy_Siy_Sár_Piy_Jum_Şem".split("_"),
  weekdaysMin: "Ye_Dú_Si_Sá_Pi_Ju_Şe".split("_"),
  months: "Qañtar_Fevral_Mart_Aprel_May_İyun_İyul_Avgust_Sentyabr_Oktyabr_Noyabr_Dekabr".split("_"),
  monthsShort: "Qañ_Fev_Mar_Apr_May_İyu_İyu_Avg_Sen_Okt_Noy_Dek".split("_"),
  weekStart: 1,
  formats: {
    LT: "HH:mm",
    LTS: "HH:mm:ss",
    L: "DD.MM.YYYY",
    LL: "D MMMM YYYY",
    LLL: "D MMMM YYYY HH:mm",
    LLLL: "dddd, D MMMM YYYY HH:mm"
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
    yy: "%d jıl"
  },
  ordinal: function ordinal(n) {
    return "".concat(n);
  }
};
_dayjs.default.locale(qaLocale, undefined, true);
var _default = qaLocale;
exports.default = _default;
//# sourceMappingURL=qa.js.map