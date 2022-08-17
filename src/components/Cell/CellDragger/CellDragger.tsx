import * as React from "react";
import { Icon24Reorder, Icon24ReorderIos } from "@vkontakte/icons";
import { getClassName } from "../../../helpers/getClassName";
import { usePlatform } from "../../../hooks/usePlatform";
import { classNames } from "../../../lib/classNames";
import { Platform } from "../../../lib/platform";
import { Touch } from "../../Touch/Touch";
import { DraggableProps } from "../useDraggable";
import "./CellDragger.css";

type CellDraggerProps = DraggableProps & React.HTMLAttributes<HTMLElement>;

export const CellDragger = ({
  onDragStart,
  onDragMove,
  onDragEnd,
  ...restProps
}: CellDraggerProps) => {
  const platform = usePlatform();

  const onClick = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);

  return (
    <Touch
      vkuiClass={classNames(getClassName("CellDragger", platform))}
      onStart={onDragStart}
      onMoveY={onDragMove}
      onEnd={onDragEnd}
      onClick={onClick}
      {...restProps}
    >
      {platform === Platform.IOS ? <Icon24ReorderIos /> : <Icon24Reorder />}
    </Touch>
  );
};
