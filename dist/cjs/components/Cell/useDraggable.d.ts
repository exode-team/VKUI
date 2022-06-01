import * as React from "react";
import { TouchEvent } from "../Touch/Touch";
import { CellProps } from "./Cell";
export interface DraggableProps {
    onDragStart: () => void;
    onDragEnd: () => void;
    onDragMove: (e: TouchEvent) => void;
}
interface UseDraggableProps extends DraggableProps {
    dragging: boolean;
}
export declare const useDraggable: <T extends HTMLElement>({ rootElRef, onDragFinish, }: Pick<CellProps, "onDragFinish"> & {
    rootElRef: React.MutableRefObject<T | null>;
}) => UseDraggableProps;
export {};
