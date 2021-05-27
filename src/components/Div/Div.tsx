import { HTMLAttributes, FunctionComponent } from 'react';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import { HasRootRef } from '../../types';
import './Div.m.css';

export interface DivProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {}

export const Div: FunctionComponent<DivProps> = ({ children, getRootRef, ...restProps }: DivProps) => {
  const platform = usePlatform();
  return (
    <div {...restProps} ref={getRootRef} vkuiClass={getClassName('Div', platform)}>
      {children}
    </div>
  );
};

export default Div;
