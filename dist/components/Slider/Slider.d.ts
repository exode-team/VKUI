/// <reference types="react" />
import { UniversalSliderProps } from "../RangeSlider/UniversalSlider";
export declare type SliderProps = UniversalSliderProps<number>;
/**
 * @see https://vkcom.github.io/VKUI/#/Slider
 */
export declare const Slider: ({ onChange, defaultValue, min, max, value, ...props }: SliderProps) => JSX.Element;