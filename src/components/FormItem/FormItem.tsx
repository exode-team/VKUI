import { AllHTMLAttributes, ElementType, FC, ReactNode, Fragment } from 'react';
import { HasRootRef } from '../../types';
import { classNames } from '../../lib/classNames';
import { useExternRef } from '../../hooks/useExternRef';
import { usePlatform } from '../../hooks/usePlatform';
import { getClassName } from '../../helpers/getClassName';
import { hasReactNode } from '../../lib/utils';
import Subhead from '../Typography/Subhead/Subhead';
import Caption from '../Typography/Caption/Caption';
import { withAdaptivity, AdaptivityProps } from '../../hoc/withAdaptivity';
import { Removable, RemovableProps } from '../Removable/Removable';
import './FormItem.css';

export interface FormItemProps extends AllHTMLAttributes<HTMLElement>, RemovableProps, HasRootRef<HTMLElement> {
  top?: ReactNode;
  bottom?: ReactNode;
  status?: 'default' | 'error' | 'valid';
  Component?: ElementType;
  /**
   * Дает возможность удалить `FormItem`. Рекомендуется использовать только для `Input` или `Select`.
   */
  removable?: boolean;
}

export const FormItem: FC<FormItemProps> = withAdaptivity((props: FormItemProps & Pick<AdaptivityProps, 'sizeY'>) => {
  const {
    children,
    top,
    bottom,
    status,
    Component,
    sizeY,
    removable,
    onRemove,
    removePlaceholder,
    getRootRef,
    ...restProps
  } = props;
  const platform = usePlatform();
  const rootEl = useExternRef(getRootRef);

  const wrappedChildren = (
    <Fragment>
      {hasReactNode(top) && <Subhead weight="regular" vkuiClass="FormItem__top">{top}</Subhead>}
      {children}
      {hasReactNode(bottom) && <Caption level="1" weight="regular" vkuiClass="FormItem__bottom">{bottom}</Caption>}
    </Fragment>
  );

  return (
    <Component
      {...restProps}
      ref={rootEl}
      vkuiClass={classNames(
        getClassName('FormItem', platform),
        `FormItem--${status}`,
        `FormItem--sizeY-${sizeY}`,
        {
          'FormItem--withTop': hasReactNode(top),
        },
      )}
    >
      {removable ? (
        <Removable align="start" onRemove={(e) => onRemove(e, rootEl?.current)} removePlaceholder={removePlaceholder}>
          <div vkuiClass="FormItem__removable">
            {wrappedChildren}
          </div>
        </Removable>
      ) : wrappedChildren}
    </Component>
  );
}, {
  sizeY: true,
});

FormItem.defaultProps = {
  status: 'default',
  Component: 'div',
  removePlaceholder: 'Удалить',
};
