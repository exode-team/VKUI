import * as React from "react";
import "./PromoBanner.css";
declare type StatsType = "playbackStarted" | "click";
declare type BannerData = {
    title?: string;
    url_types?: string;
    bannerID?: string;
    imageWidth?: number;
    imageHeight?: number;
    imageLink?: string;
    trackingLink?: string;
    type?: string;
    iconWidth?: number;
    domain?: string;
    ctaText?: string;
    advertisingLabel?: string;
    iconLink?: string;
    statistics?: Array<{
        type: StatsType;
        url: string;
    }>;
    openInBrowser?: boolean;
    iconHeight?: number;
    directLink?: boolean;
    navigationType?: string;
    description?: string;
    ageRestrictions?: string;
    /** @deprecated */
    ageRestriction?: number;
};
export interface PromoBannerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Данные рекламного баннера, полученные из VKWebAppGetAds */
    bannerData: BannerData;
    /** Флаг скрытия кнопки закрытия рекламы */
    isCloseButtonHidden?: boolean;
    /** Хандлер закрытия рекламы */
    onClose: () => void;
}
/**
 * @see https://vkcom.github.io/VKUI/#/PromoBanner
 */
export declare const PromoBanner: ({ bannerData, onClose, isCloseButtonHidden, ...restProps }: PromoBannerProps) => JSX.Element;
export {};
