import * as React from "react";
import { classNames } from "../../lib/classNames";
import { useDOM } from "../../lib/dom";
import { useIsomorphicLayoutEffect } from "../../lib/useIsomorphicLayoutEffect";
import { generateRandomId, noop } from "../../lib/utils";
import { warnOnce } from "../../lib/warnOnce";
import { SegmentedControlOption } from "./SegmentedControlOption/SegmentedControlOption";
import { HasRootRef } from "../../types";
import { useAdaptivity } from "../../hooks/useAdaptivity";
import "./SegmentedControl.css";

export type SegmentedControlValue = string | number | undefined;

export interface SegmentedControlOptionInterface
  extends Omit<React.HTMLAttributes<HTMLElement>, "label"> {
  label: React.ReactChild;
  value: SegmentedControlValue;
}

export interface SegmentedControlProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">,
    HasRootRef<HTMLDivElement> {
  options: SegmentedControlOptionInterface[];
  size?: "m" | "l";
  name?: string;
  onChange?: (value: SegmentedControlValue) => void;
  value?: SegmentedControlValue;
  defaultValue?: SegmentedControlValue;
  dataTest?: string;
  /**
   * Ширина пунктов: `equal` — поровну, `content` — по подписи каждого (ползунок встаёт по замеру пункта)
   */
  optionsWidth?: "equal" | "content";
}

const warn = warnOnce("SegmentedControl");

/**
 * @see https://vkcom.github.io/VKUI/#/SegmentedControl
 */
export const SegmentedControl = ({
  size = "l",
  name,
  options,
  getRootRef,
  onChange = noop,
  value: valueProp,
  defaultValue,
  children,
  dataTest,
  optionsWidth = "equal",
  ...restProps
}: SegmentedControlProps) => {
  const { sizeY } = useAdaptivity();
  const { window } = useDOM();
  const initialValue = defaultValue ?? options[0]?.value;

  if (process.env.NODE_ENV === "development") {
    if (valueProp !== undefined && defaultValue !== undefined) {
      warn(
        "SegmentedControl должен быть либо управляемым, либо неуправляемым" +
          "(укажите либо свойство value, либо свойство defaultValue, но не оба).",
        "error"
      );
    }
  }

  const [activeOptionIdx, updateActiveOptionIdx] = React.useState<number>(0);
  const [valueLocal, updateValueLocal] =
    React.useState<SegmentedControlValue>(initialValue);

  const value = valueProp ?? valueLocal;

  const nameRef = React.useRef<string>(name ?? generateRandomId());
  const inRef = React.useRef<HTMLDivElement>(null);

  const [sliderRect, setSliderRect] = React.useState<{
    left: number;
    width: number;
  } | null>(null);

  useIsomorphicLayoutEffect(() => {
    const _activeOptionIdx = options.findIndex(
      (option) => option.value === value
    );

    if (_activeOptionIdx === -1 && process.env.NODE_ENV === "development") {
      warn("defaultValue: такого значения нет среди опций!", "error");
    }

    updateActiveOptionIdx(_activeOptionIdx);
  }, [value, options]);

  useIsomorphicLayoutEffect(() => {
    const container = inRef.current;

    if (optionsWidth !== "content" || activeOptionIdx < 0 || !container) {
      return;
    }

    const labels = Array.from(container.children).filter(
      (el): el is HTMLElement => el.tagName === "LABEL"
    );

    const measure = () => {
      const option = labels[activeOptionIdx];

      if (option) {
        setSliderRect({ left: option.offsetLeft, width: option.offsetWidth });
      }
    };

    measure();

    /** Подпись меняет ширину после загрузки шрифта и смены языка; ResizeObserver нет в lib текущего TS */
    const Observer = (window as any)?.ResizeObserver;

    if (!Observer) {
      return;
    }

    const observer = new Observer(measure);

    labels.forEach((label) => observer.observe(label));

    return () => observer.disconnect();
  }, [activeOptionIdx, optionsWidth, options, window]);

  const isContentWidth = optionsWidth === "content";

  const translateX = isContentWidth
    ? `translateX(${sliderRect?.left ?? 0}px)`
    : `translateX(${100 * activeOptionIdx}%)`;

  const handleOnChange = (value: SegmentedControlValue) => {
    if (valueProp === undefined) {
      updateValueLocal(value);
    }
    onChange(value);
  };

  return (
    <div
      {...restProps}
      vkuiClass={classNames(
        "SegmentedControl",
        // TODO v5.0.0 поправить под новую адаптивность
        `SegmentedControl--sizeY-${sizeY}`,
        `SegmentedControl--${size}`,
        isContentWidth && "SegmentedControl--content"
      )}
      ref={getRootRef}
      data-test={dataTest}
      data-value={value}
    >
      <div role="radiogroup" vkuiClass="SegmentedControl__in" ref={inRef}>
        {activeOptionIdx > -1 && (!isContentWidth || sliderRect) && (
          <div
            aria-hidden="true"
            vkuiClass="SegmentedControl__slider"
            style={{
              width: isContentWidth
                ? sliderRect?.width
                : `${100 / options.length}%`,
              transform: translateX,
              WebkitTransform: translateX,
            }}
          />
        )}
        {options.map(({ label, ...optionProps }) => (
          <SegmentedControlOption
            key={`${optionProps.value}`}
            {...optionProps}
            data-test="segmented-option"
            data-value={optionProps.value}
            vkuiClass="SegmentedControl__option"
            name={nameRef.current}
            checked={value === optionProps.value}
            onChange={() => handleOnChange(optionProps.value)}
          >
            {label}
          </SegmentedControlOption>
        ))}
      </div>
    </div>
  );
};
