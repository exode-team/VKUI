import * as React from "react";
import { HasRootRef } from "../../types";
import { RemovableProps } from "../Removable/Removable";
import "./FormLayoutGroup.css";
export interface FormLayoutGroupProps extends React.HTMLAttributes<HTMLDivElement>, RemovableProps, HasRootRef<HTMLDivElement> {
    mode?: "vertical" | "horizontal";
    /**
     * Только для режима horizontal. Дает возможность удалить всю группу `FormItem`.
     */
    removable?: boolean;
    /**
     * Только для режима horizontal. Дает возможность склеить несколько `FormItem`.
     */
    segmented?: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/FormLayoutGroup
 */
export declare const FormLayoutGroup: ({ children, mode, removable, segmented, removePlaceholder, onRemove, getRootRef, ...restProps }: FormLayoutGroupProps) => JSX.Element;
