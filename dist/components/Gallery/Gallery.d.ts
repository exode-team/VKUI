/// <reference types="react" />
import { BaseGalleryProps } from "../BaseGallery/types";
export interface GalleryProps extends BaseGalleryProps {
    initialSlideIndex?: number;
    timeout?: number;
}
/**
 * @see https://vkcom.github.io/VKUI/#/Gallery
 */
export declare const Gallery: ({ initialSlideIndex, children, timeout, onChange, bullets, ...props }: GalleryProps) => JSX.Element;
