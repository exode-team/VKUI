import { FunctionComponent, HTMLAttributes } from 'react';
import Spinner, { SpinnerProps } from '../Spinner/Spinner';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import { getClassName } from '../../helpers/getClassName';
import { usePlatform } from '../../hooks/usePlatform';
import './ScreenSpinner.css';

export interface ScreenSpinnerProps extends HTMLAttributes<HTMLDivElement>, SpinnerProps {}

const ScreenSpinner: FunctionComponent<ScreenSpinnerProps> = (props: ScreenSpinnerProps) => {
  const { style, className, ...restProps } = props;
  const platform = usePlatform();

  return (
    <PopoutWrapper
      vkuiClass={getClassName('ScreenSpinner', platform)}
      className={className}
      style={style}
    >
      <div vkuiClass="ScreenSpinner__container">
        <Spinner vkuiClass="ScreenSpinner__spinner" {...restProps} />
      </div>
    </PopoutWrapper>
  );
};

ScreenSpinner.defaultProps = {
  size: 'large',
};

export default ScreenSpinner;
