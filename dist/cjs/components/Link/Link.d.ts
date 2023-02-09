/// <reference types="react" />
import { TappableProps } from "../Tappable/Tappable";
import "./Link.css";
export interface LinkProps extends TappableProps {
    /**
     * Включает состояние `visited`, которое позволяет пользователю понять посещал ли он ссылку или нет
     */
    hasVisited?: boolean;
}
/**
 * @see https://vkcom.github.io/VKUI/#/Link
 */
export declare const Link: ({ hasVisited, children, ...restProps }: LinkProps) => JSX.Element;
