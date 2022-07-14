import React, { useRef, useEffect } from 'react';
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
    FormFieldProps {
  isFocus?: boolean;
  alwaysInFocus?: boolean;
  caretPosition?: number;
}

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
  caretPosition,
  alwaysInFocus,
  isFocus = false,
  ...restProps
}: InputProps) => {

  const platform = usePlatform();
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const caret = e.target.selectionStart
      const element = e.target

    window.requestAnimationFrame(() => {
        element.selectionStart = caret
        element.selectionEnd = caret
      })

    onInput && onInput(e);
  };
   //to enable always in focus uncomment
  // const handleBlur = () => ref.current?.focus();

  useEffect(() => {
    isFocus && ref.current?.focus()
    caretPosition && ref.current?.setSelectionRange(caretPosition, caretPosition)
  }, [])

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
      <input {...restProps} type={type} onInput={handleChange} value={value} vkuiClass="Input__el" ref={ref || getRef} />
    </FormField>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/Input
 */
export const Input = withAdaptivity(InputComponent, {
  sizeY: true,
});
