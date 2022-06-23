import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { usePlatform } from "../../hooks/usePlatform";
import "./Tabbar.css";

export interface TabbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Флаг для показа/скрытия верхней тени (Android) или границы (iOS)
   */
  shadow?: boolean;
  itemsLayout?: "vertical" | "horizontal" | "auto";
}

/**
 * @see https://vkcom.github.io/VKUI/#/Tabbar
 */
export const Tabbar: React.FunctionComponent<TabbarProps> = ({
  children,
  shadow = true,
  itemsLayout,
  ...restProps
}: TabbarProps) => {
  const platform = usePlatform();

  const getItemsLayout = () => {
    switch (itemsLayout) {
      case "horizontal":
      case "vertical":
        return itemsLayout;
      default:
        return React.Children.count(children) > 2 ? "vertical" : "horizontal";
    }
  };

  return (
    <div
      // eslint-disable-next-line vkui/no-object-expression-in-arguments
      vkuiClass={classNames(
        getClassName("Tabbar", platform),
        `Tabbar--l-${getItemsLayout()}`,
        {
          "Tabbar--shadow": shadow,
        }
      )}
      {...restProps}
    >
      <div vkuiClass="Tabbar__in">{children}</div>
    </div>
  );
};
