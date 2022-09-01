import { LayoutState } from "./types";
import { HasAlign } from "../../types";
interface CalcMin extends Partial<LayoutState> {
    isCenterWithCustomWidth: boolean;
    align: HasAlign["align"];
}
export declare const calcMin: ({ containerWidth, layerWidth, slides, viewportOffsetWidth, align, isCenterWithCustomWidth, }: CalcMin) => number | undefined;
interface CalcMax extends Partial<LayoutState> {
    isCenterWithCustomWidth: boolean;
}
export declare const calcMax: ({ slides, viewportOffsetWidth, isCenterWithCustomWidth, }: CalcMax) => number;
export {};