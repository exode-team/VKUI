import * as React from "react";
import { AppearanceType } from "@vkontakte/vk-bridge";
import { Scheme } from "../../helpers/scheme";
export interface AppearanceProviderContextProps {
    scheme: Scheme | "inherit" | undefined;
    appearance: AppearanceType;
}
export declare const AppearanceProviderContext: React.Context<AppearanceProviderContextProps | undefined>;
