import * as React from "react";
import { useEffect, useRef, useState } from 'react';
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import { FormField, FormFieldProps } from "../FormField/FormField";
import { HasAlign, HasRef, HasRootRef } from "../../types";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
import { usePlatform } from "../../hooks/usePlatform";
import "./Input.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    HasRef<HTMLInputElement>,
    HasRootRef<HTMLDivElement>,
    HasAlign,
    AdaptivityProps,
    FormFieldProps {}

const InputComponent: React.FunctionComponent<InputProps> = ({
  type = "text",
  align,
  getRef,
  className,
  getRootRef,
  sizeY,
  style,
  before,
  after,
  onInput,
  value,
  ...restProps
}: InputProps) => {

  const [cursor, setCursor] = useState<number>(0);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = ref.current;
    if (input) input.setSelectionRange(cursor, cursor);
  }, [ref, cursor, value])

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.target.selectionStart && setCursor(e.target.selectionStart);
    onInput && onInput(e);
  };

  const platform = usePlatform();
  return (
    <FormField
      vkuiClass={classNames(
        getClassName("Input", platform),
        !!align && `Input--${align}`,
        `Input--sizeY-${sizeY}`
      )}
      style={style}
      className={className}
      getRootRef={getRootRef}
      before={before}
      after={after}
      disabled={restProps.disabled}
    >
      <input {...restProps} type={type} vkuiClass="Input__el" ref={getRef} />
      <input {...restProps} onInput={handleChange} value={value} vkuiClass="Input__el" ref={ref || getRef} />
    </FormField>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/Input
 */
export const Input = withAdaptivity(InputComponent, {
  sizeY: true,
});
