import * as React from "react";
import { HoverPopper, HoverPopperProps } from "../HoverPopper/HoverPopper";
import { hasReactNode } from "../../lib/utils";
import { Subhead } from "../Typography/Subhead/Subhead";
import { prefixClass } from "../../lib/prefixClass";
import { classNames } from "../../lib/classNames";
import "./TextTooltip.css";

export interface TextTooltipProps
  extends Omit<
    HoverPopperProps,
    "arrow" | "arrowClassName" | "content" | "contentKey"
  > {
  /**
   * Текст тултипа
   */
  text?: React.ReactNode;
  /**
   * Заголовок тултипа
   */
  header?: React.ReactNode;
  /**
   * Стиль отображения подсказки
   */
  appearance?: "accent" | "neutral" | "white" | "black" | "inversion";
}

/**
 * @see https://vkcom.github.io/VKUI/#/TextTooltip
 */
export const TextTooltip = ({
  children,
  text,
  header,
  appearance = "inversion",
  ...popperProps
}: TextTooltipProps) => {
  /**
   * Новый текст (строка или число) — новый ключ: поппер пересоздаётся под свой
   * размер, иначе после смены текста он оставался по размеру и месту старого
   */
  const contentKey = [header, text]
    .map((part) =>
      typeof part === "string" || typeof part === "number" ? part : ""
    )
    .join("\u0000");

  return (
    <HoverPopper
      vkuiClass={classNames("TextTooltip", `TextTooltip--${appearance}`)}
      contentKey={contentKey}
      arrow
      arrowClassName={prefixClass("TextTooltip__arrow")}
      content={
        <React.Fragment>
          {hasReactNode(header) && (
            <Subhead weight="2" vkuiClass="TextTooltip__header">
              {header}
            </Subhead>
          )}
          {hasReactNode(text) && (
            <Subhead vkuiClass="TextTooltip__text">{text}</Subhead>
          )}
        </React.Fragment>
      }
      {...popperProps}
    >
      {children}
    </HoverPopper>
  );
};
