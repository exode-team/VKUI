import React, { useRef, useEffect } from 'react';
import { classNames } from "../../lib/classNames";
import { FormField, FormFieldProps } from "../FormField/FormField";
import { HasAlign, HasRef, HasRootRef } from "../../types";
import { withAdaptivity, AdaptivityProps } from "../../hoc/withAdaptivity";
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

const InputComponent = ({
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
  status,
  ...restProps
}: InputProps) => {

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
        "Input",
        !!align && `Input--${align}`,
        `Input--sizeY-${sizeY}`, // TODO v5.0.0 поправить под новую адаптивность
        before && "Input--hasBefore",
        after && "Input--hasAfter"
      )}
      style={style}
      className={className}
      getRootRef={getRootRef}
      before={before}
      after={after}
      disabled={restProps.disabled}
      status={status}
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

Input.displayName = "Input";
