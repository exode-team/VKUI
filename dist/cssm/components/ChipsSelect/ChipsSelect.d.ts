import * as React from "react";
import { ChipOption } from "../Chip/Chip";
import { ChipsInputProps } from "../ChipsInput/ChipsInput";
import { CustomSelectOptionProps } from "../CustomSelectOption/CustomSelectOption";
import "./ChipsSelect.css";
export interface ChipsSelectProps<Option extends ChipOption> extends Omit<ChipsInputProps<Option>, "after"> {
    popupDirection?: "top" | "bottom";
    options?: Option[];
    filterFn?: false | ((value?: string, option?: Option, getOptionLabel?: Pick<ChipsInputProps<Option>, "getOptionLabel">["getOptionLabel"]) => boolean);
    /**
     * Возможность создавать чипы которых нет в списке (по enter или с помощью пункта в меню, см creatableText)
     */
    creatable?: boolean;
    /**
     * Отрисовка лоадера вместо списка опций в выпадающем списке
     */
    fetching?: boolean;
    renderOption?: (props: CustomSelectOptionProps) => React.ReactNode;
    /**
     * Показывать или скрывать уже выбранные опции
     */
    showSelected?: boolean;
    /**
     * Текст для пункта создающего чипы при клике, так же отвечает за то будет ли показан этот пункт (показывается после того как в списке не отсанется опций)
     */
    creatableText?: string;
    /**
     * Текст который показывается если список опций пуст
     */
    emptyText?: string;
    /**
     * Событие срабатывающее перед onChange
     */
    onChangeStart?: (e: React.MouseEvent | React.KeyboardEvent, option: Option) => void;
    /**
     * Закрытие выпадающего списка после выбора элемента
     */
    closeAfterSelect?: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/ChipsSelect
 */
export declare const ChipsSelect: <Option extends ChipOption>(props: ChipsSelectProps<Option>) => JSX.Element;