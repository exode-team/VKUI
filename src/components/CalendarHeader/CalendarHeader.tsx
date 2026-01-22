import * as React from "react";
import { setMonth, setYear, subMonths, addMonths } from "../../lib/date";
import {
  Icon20ChevronLeftOutline,
  Icon20ChevronRightOutline,
  Icon12Dropdown,
} from "@vkontakte/icons";
import { Tappable, TappableElementProps } from "../Tappable/Tappable";
import { classNames } from "../../lib/classNames";
import { SelectType } from "../Select/Select";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { SizeType } from "../../hoc/withAdaptivity";
import { getMonths, getYears } from "../../lib/calendar";
import { LocaleProviderContext } from "../LocaleProviderContext/LocaleProviderContext";
import { Paragraph } from "../Typography/Paragraph/Paragraph";
import { AdaptivityProvider } from "../AdaptivityProvider/AdaptivityProvider";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import "dayjs/locale/en";
import "dayjs/locale/uz-latn";
import "../../lib/locales/qa";
import "./CalendarHeader.css";

type ArrowMonthProps = Omit<TappableElementProps, "onClick" | "aria-label">;

export interface CalendarHeaderProps
  extends Pick<React.HTMLAttributes<HTMLDivElement>, "className"> {
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

export const CalendarHeader = ({
  viewDate,
  onChange,
  prevMonth = true,
  nextMonth = true,
  disablePickers = false,
  onNextMonth,
  onPrevMonth,
  className,
  prevMonthProps,
  nextMonthProps,
  prevMonthAriaLabel = "Предыдущий месяц",
  nextMonthAriaLabel = "Следующий месяц",
  changeMonthAriaLabel = "Изменить месяц",
  changeYearAriaLabel = "Изменить год",
  prevMonthIcon = (
    <Icon20ChevronLeftOutline
      vkuiClass="CalendarHeader__nav-icon--accent"
      width={30}
      height={30}
    />
  ),
  nextMonthIcon = (
    <Icon20ChevronRightOutline
      vkuiClass="CalendarHeader__nav-icon--accent"
      width={30}
      height={30}
    />
  ),
}: CalendarHeaderProps) => {
  const locale = React.useContext(LocaleProviderContext);
  const onMonthsChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      onChange(setMonth(viewDate, Number(event.target.value))),
    [onChange, viewDate]
  );
  const onYearChange = React.useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      onChange(setYear(viewDate, Number(event.target.value))),
    [onChange, viewDate]
  );

  const months = React.useMemo(
    () =>
      getMonths(locale).map(({ value, label }) => ({
        value,
        label: <span vkuiClass="CalendarHeader__month">{label}</span>,
      })),
    [locale]
  );

  const currentYear = viewDate.getFullYear();

  const years = React.useMemo(() => getYears(currentYear, 100), [currentYear]);

  // Map locale to dayjs locale
  const dayjsLocale = React.useMemo(() => {
    switch (locale) {
      case "uz":
        return "uz-latn";
      case "qa":
        return "qa";
      default:
        return locale || "ru";
    }
  }, [locale]);

  // Format date using dayjs only
  const formatDate = React.useCallback(
    (date: Date, formatStr: string) => {
      const currentLocale = dayjs.locale();
      dayjs.locale(dayjsLocale || "ru");
      const formatted = dayjs(date).format(formatStr);
      dayjs.locale(currentLocale);
      return formatted;
    },
    [dayjsLocale]
  );

  return (
    <div vkuiClass="CalendarHeader" className={className}>
      {prevMonth && (
        <AdaptivityProvider sizeX={SizeType.REGULAR}>
          <Tappable
            vkuiClass={classNames(
              "CalendarHeader__nav-icon",
              "CalendarHeader__nav-icon-prev"
            )}
            onClick={onPrevMonth}
            aria-label={`${prevMonthAriaLabel}, ${formatDate(
              subMonths(viewDate, 1),
              "MMMM YYYY"
            )}`}
            {...prevMonthProps}
          >
            {prevMonthIcon}
          </Tappable>
        </AdaptivityProvider>
      )}
      {disablePickers ? (
        <Paragraph vkuiClass="CalendarHeader__pickers" weight="2">
          <span vkuiClass="CalendarHeader__month">
            {formatDate(viewDate, "MMMM")}
          </span>
          &nbsp;
          {formatDate(viewDate, "YYYY")}
        </Paragraph>
      ) : (
        <div vkuiClass="CalendarHeader__pickers">
          <CustomSelect
            vkuiClass="CalendarHeader__picker"
            value={viewDate.getMonth()}
            options={months}
            dropdownOffsetDistance={4}
            fixDropdownWidth={false}
            sizeY={SizeType.COMPACT}
            icon={<Icon12Dropdown />}
            onChange={onMonthsChange}
            forceDropdownPortal={false}
            selectType={SelectType.accent}
            aria-label={changeMonthAriaLabel}
          />
          <CustomSelect
            vkuiClass="CalendarHeader__picker"
            value={viewDate.getFullYear()}
            options={years}
            dropdownOffsetDistance={4}
            fixDropdownWidth={false}
            sizeY={SizeType.COMPACT}
            icon={<Icon12Dropdown />}
            onChange={onYearChange}
            forceDropdownPortal={false}
            selectType={SelectType.accent}
            aria-label={changeYearAriaLabel}
          />
        </div>
      )}
      {nextMonth && (
        <AdaptivityProvider sizeX={SizeType.REGULAR}>
          <Tappable
            vkuiClass={classNames(
              "CalendarHeader__nav-icon",
              "CalendarHeader__nav-icon-next"
            )}
            onClick={onNextMonth}
            aria-label={`${nextMonthAriaLabel}, ${formatDate(
              addMonths(viewDate, 1),
              "MMMM YYYY"
            )}`}
            {...nextMonthProps}
          >
            {nextMonthIcon}
          </Tappable>
        </AdaptivityProvider>
      )}
    </div>
  );
};
