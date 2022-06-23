import * as React from "react";
import { getClassName } from "../../helpers/getClassName";
import { classNames } from "../../lib/classNames";
import {
  ModalRootContext,
  useModalRegistry,
} from "../ModalRoot/ModalRootContext";
import { usePlatform } from "../../hooks/usePlatform";
import { useOrientationChange } from "../../hooks/useOrientationChange";
import { withAdaptivity, ViewWidth } from "../../hoc/withAdaptivity";
import {
  AdaptivityContextInterface,
  AdaptivityProps,
} from "../AdaptivityProvider/AdaptivityContext";
import { ModalDismissButton } from "../ModalDismissButton/ModalDismissButton";
import { multiRef } from "../../lib/utils";
import { ModalType } from "../ModalRoot/types";
import { getNavId, NavIdProps } from "../../lib/getNavId";
import { warnOnce } from "../../lib/warnOnce";
import { Platform } from "../../lib/platform";
import { useAdaptivityIsDesktop } from "../../hooks/useAdaptivity";
import "./ModalPage.css";

export interface ModalPageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    AdaptivityProps,
    NavIdProps {
  /**
   * Шапка модальной страницы, `<ModalPageHeader />`
   */
  header?: React.ReactNode;
  /**
   * Будет вызвано при начале открытия модалки.
   */
  onOpen?: VoidFunction;
  /**
   * Будет вызвано при окончательном открытии модалки.
   */
  onOpened?: VoidFunction;
  /**
   * Будет вызвано при начале закрытия модалки.
   */
  onClose?: VoidFunction;
  /**
   * Будет вызвано при окончательном закрытии модалки.
   */
  onClosed?: VoidFunction;
  /**
   * Процент, на который изначально будет открыта модальная страница. При `settlingHeight={100}` модальная страница раскрывается на всю высоту.
   */
  settlingHeight?: number;
  /**
   * Если высота контента в модальной странице может поменяться, нужно установить это свойство
   */
  dynamicContentHeight?: boolean;
  getModalContentRef?: React.Ref<HTMLDivElement>;
}

const warn = warnOnce("ModalPage");

const ModalPageComponent: React.FC<
  ModalPageProps & AdaptivityContextInterface
> = ({
  children,
  header,
  viewWidth,
  viewHeight,
  sizeX,
  hasMouse,
  onOpen,
  onOpened,
  onClose,
  onClosed,
  settlingHeight, // 75
  dynamicContentHeight,
  getModalContentRef,
  nav,
  id,
  ...restProps
}) => {
  const { updateModalHeight } = React.useContext(ModalRootContext);

  const platform = usePlatform();
  const orientation = useOrientationChange();

  React.useEffect(updateModalHeight, [
    children,
    orientation,
    updateModalHeight,
  ]);

  const isDesktop = useAdaptivityIsDesktop();
  const canShowCloseBtn =
    viewWidth >= ViewWidth.SMALL_TABLET || platform === Platform.VKCOM;

  const modalContext = React.useContext(ModalRootContext);
  const { refs } = useModalRegistry(
    getNavId({ nav, id }, warn),
    ModalType.PAGE
  );

  return (
    <div
      {...restProps}
      id={id}
      // eslint-disable-next-line vkui/no-object-expression-in-arguments
      vkuiClass={classNames(
        getClassName("ModalPage", platform),
        `ModalPage--sizeX-${sizeX}`,
        {
          "ModalPage--desktop": isDesktop,
        }
      )}
    >
      <div vkuiClass="ModalPage__in-wrap" ref={refs.innerElement}>
        <div vkuiClass="ModalPage__in">
          <div vkuiClass="ModalPage__header" ref={refs.headerElement}>
            {header}
          </div>

          <div vkuiClass="ModalPage__content-wrap">
            <div
              vkuiClass="ModalPage__content"
              ref={multiRef<HTMLDivElement>(
                refs.contentElement,
                getModalContentRef
              )}
            >
              <div vkuiClass="ModalPage__content-in">{children}</div>
            </div>
          </div>
          {canShowCloseBtn && (
            <ModalDismissButton onClick={onClose || modalContext.onClose} />
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * @see https://vkcom.github.io/VKUI/#/ModalPage
 */
export const ModalPage = withAdaptivity(ModalPageComponent, {
  viewWidth: true,
  viewHeight: true,
  sizeX: true,
  hasMouse: true,
});

ModalPage.displayName = "ModalPage";
