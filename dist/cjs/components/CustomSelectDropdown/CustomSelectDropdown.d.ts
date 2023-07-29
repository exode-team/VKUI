import * as React from "react";
import { TrackerOptionsProps } from "../CustomScrollView/useTrackerVisibility";
import { Placement } from "../Popper/Popper";
import { HasRef } from "../../types";
import "./CustomSelectDropdown.css";
export interface CustomSelectDropdownProps extends React.HTMLAttributes<HTMLElement>, HasRef<HTMLDivElement>, TrackerOptionsProps {
    targetRef: React.RefObject<HTMLElement>;
    placement?: Placement;
    scrollBoxRef?: React.RefObject<HTMLDivElement>;
    observableRefs?: Array<React.RefObject<HTMLElement>> | React.RefObject<HTMLElement>;
    fetching?: boolean;
    offsetDistance?: number;
    sameWidth?: boolean;
    forcePortal?: boolean;
    onPlacementChange?: (placement?: Placement) => void;
}
export declare const CustomSelectDropdown: ({ children, targetRef, scrollBoxRef, placement, fetching, onPlacementChange: parentOnPlacementChange, offsetDistance, sameWidth, forcePortal, autoHideScrollbar, autoHideScrollbarDelay, observableRefs, ...restProps }: CustomSelectDropdownProps) => JSX.Element;
