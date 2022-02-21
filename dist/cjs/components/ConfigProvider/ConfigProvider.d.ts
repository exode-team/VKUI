import * as React from "react";
import { ConfigProviderContextInterface } from "./ConfigProviderContext";
import { AppearanceScheme } from "../../helpers/scheme";
export interface ConfigProviderProps extends Partial<ConfigProviderContextInterface> {
    /**
     * @deprecated будет удалено в 5.0.0, устанавливать тему следует через appearance
     * Цветовая схема приложения
     */
    scheme?: AppearanceScheme;
}
declare const ConfigProvider: React.FC<ConfigProviderProps>;
export default ConfigProvider;
