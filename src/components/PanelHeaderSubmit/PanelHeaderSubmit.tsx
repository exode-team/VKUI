import * as React from "react";
import {
  PanelHeaderButton,
  PanelHeaderButtonProps,
} from "../PanelHeaderButton/PanelHeaderButton";
import { Icon28DoneOutline } from "@vkontakte/icons";
import { ANDROID, VKCOM } from "../../lib/platform";
import { usePlatform } from "../../hooks/usePlatform";
import { getTitleFromChildren } from "../../lib/utils";

/**
 * @see https://vkcom.github.io/VKUI/#/PanelHeaderSubmit
 */
const PanelHeaderSubmit: React.FunctionComponent<PanelHeaderButtonProps> = ({
  children,
  ...restProps
}: PanelHeaderButtonProps) => {
  const platform = usePlatform();

  return (
    <PanelHeaderButton
      aria-label={getTitleFromChildren(children)}
      primary
      {...restProps}
    >
      {platform === ANDROID || platform === VKCOM ? (
        <Icon28DoneOutline />
      ) : (
        children
      )}
    </PanelHeaderButton>
  );
};

PanelHeaderSubmit.defaultProps = {
  children: "Готово",
};

// eslint-disable-next-line import/no-default-export
export default PanelHeaderSubmit;
