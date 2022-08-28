import * as React from "react";
export interface DropdownIconProps extends React.HTMLAttributes<HTMLDivElement> {
    opened?: boolean;
}
export declare const DropdownIcon: ({ opened, ...restProps }: DropdownIconProps) => JSX.Element;
