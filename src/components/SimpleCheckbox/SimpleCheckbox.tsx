import * as React from "react";
import { ACTIVE_EFFECT_DELAY, Tappable } from "../Tappable/Tappable";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { Platform } from "../../lib/platform";
import {
  Icon20CheckBoxOn,
  Icon20CheckBoxOff,
  Icon20CheckBoxIndetermanate,
  Icon24CheckBoxOff,
  Icon24CheckBoxOn,
} from "@vkontakte/icons";
import { HasRef, HasRootRef } from "../../types";
import { usePlatform } from "../../hooks/usePlatform";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import { useExternRef } from "../../hooks/useExternRef";
import { warnOnce } from "../../lib/warnOnce";
import { getSizeYClassName } from "../../helpers/getSizeYClassName";
import { SizeYConditionalRender } from "../SizeYConditionalRender/SizeYConditionalRender";
import "./SimpleCheckbox.css";

const warn = warnOnce("SimpleCheckbox");
const IS_DEV = process.env.NODE_ENV === "development";

export interface SimpleCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRootRef<HTMLLabelElement>,
    HasRef<HTMLInputElement> {
  indeterminate?: boolean;
  defaultIndeterminate?: boolean;
}

/**
 * @deprecated Этот компонент устарел и будет удален в 5.0.0. Используйте [`Checkbox`](https://vkcom.github.io/VKUI/#/Checkbox).
 * @see https://vkcom.github.io/VKUI/#/SimpleCheckbox
 */
export const SimpleCheckbox = ({
  className,
  style,
  getRootRef,
  getRef,
  indeterminate,
  defaultIndeterminate,
  onChange,
  ...restProps
}: SimpleCheckboxProps) => {
  const { sizeY } = useAdaptivity();
  const platform = usePlatform();
  const inputRef = useExternRef(getRef);

  React.useEffect(() => {
    const indeterminateValue =
      indeterminate === undefined ? defaultIndeterminate : indeterminate;

    if (inputRef.current) {
      inputRef.current.indeterminate = Boolean(indeterminateValue);
    }
  }, [defaultIndeterminate, indeterminate, inputRef]);

  const handleChange: SimpleCheckboxProps["onChange"] = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (
        defaultIndeterminate !== undefined &&
        indeterminate === undefined &&
        restProps.checked === undefined &&
        inputRef.current
      ) {
        inputRef.current.indeterminate = false;
      }
      if (indeterminate !== undefined && inputRef.current) {
        inputRef.current.indeterminate = indeterminate;
      }
      onChange && onChange(event);
    },
    [defaultIndeterminate, indeterminate, restProps.checked, onChange, inputRef]
  );

  if (IS_DEV) {
    if (defaultIndeterminate && restProps.defaultChecked) {
      warn(
        "defaultIndeterminate и defaultChecked не могут быть true одновременно",
        "error"
      );
    }

    if (indeterminate && restProps.checked) {
      warn("indeterminate и checked не могут быть true одновременно", "error");
    }

    if (restProps.defaultChecked && restProps.checked) {
      warn("defaultChecked и checked не могут быть true одновременно", "error");
    }
  }

  return (
    <Tappable
      Component="label"
      vkuiClass={classNames(
        getClassName("SimpleCheckbox", platform),
        getSizeYClassName("SimpleCheckbox", sizeY)
      )}
      className={className}
      style={style}
      disabled={restProps.disabled}
      activeMode={
        platform === Platform.VKCOM ? "SimpleCheckbox--active" : "background"
      }
      hoverMode={
        platform === Platform.VKCOM ? "SimpleCheckbox--hover" : "background"
      }
      activeEffectDelay={platform === Platform.IOS ? 100 : ACTIVE_EFFECT_DELAY}
      getRootRef={getRootRef}
    >
      <input
        {...restProps}
        onChange={handleChange}
        type="checkbox"
        vkuiClass="SimpleCheckbox__input"
        ref={inputRef}
      />
      <div vkuiClass="SimpleCheckbox__container">
        <div vkuiClass="SimpleCheckbox__icon SimpleCheckbox__icon--on">
          {platform === Platform.VKCOM ? (
            <Icon20CheckBoxOn />
          ) : (
            <SizeYConditionalRender
              compact={<Icon20CheckBoxOn />}
              regular={<Icon24CheckBoxOn />}
            />
          )}
        </div>
        <div vkuiClass="SimpleCheckbox__icon SimpleCheckbox__icon--off">
          {platform === Platform.VKCOM ? (
            <Icon20CheckBoxOff />
          ) : (
            <SizeYConditionalRender
              compact={<Icon20CheckBoxOff />}
              regular={<Icon24CheckBoxOff />}
            />
          )}
        </div>
        <div vkuiClass="SimpleCheckbox__icon SimpleCheckbox__icon--indeterminate">
          <Icon20CheckBoxIndetermanate vkuiClass="SimpleCheckbox__icon--inner" />
        </div>
      </div>
      {platform === Platform.VKCOM && (
        <div aria-hidden={true} vkuiClass="SimpleCheckbox__activeShadow" />
      )}
      {platform === Platform.VKCOM && (
        <div aria-hidden={true} vkuiClass="SimpleCheckbox__hoverShadow" />
      )}
    </Tappable>
  );
};
