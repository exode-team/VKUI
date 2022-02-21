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

const Input: React.FunctionComponent<InputProps> = ({
  align,
  getRef,
  className,
  getRootRef,
  sizeY,
  style,
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
        { [`Input--${align}`]: !!align },
        `Input--sizeY-${sizeY}`
      )}
      style={style}
      className={className}
      getRootRef={getRootRef}
      after={after}
      disabled={restProps.disabled}
    >
      <input {...restProps} onInput={handleChange} value={value} vkuiClass="Input__el" ref={ref || getRef} />
    </FormField>
  );
};

Input.defaultProps = {
  type: "text",
};

// eslint-disable-next-line import/no-default-export
export default withAdaptivity(Input, {
  sizeY: true,
});
