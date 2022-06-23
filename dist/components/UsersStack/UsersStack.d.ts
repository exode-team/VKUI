import * as React from 'react';
import './UsersStack.css';
export interface UsersStackProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Массив ссылок на фотографии
     */
    photos?: React.ReactNode[];
    /**
     * Размер аватарок
     */
    size?: 'xs' | 's' | 'm';
    /**
     * Вертикальный режим рекомендуется использовать с размером `m`
     */
    layout?: 'vertical' | 'horizontal';
    /**
     * Количество аватарок, которые будут показаны.
     * Если в массиве `photos` больше элементов и используется размер `m`, то будет показано количество остальных элементов
     */
    visibleCount?: number;
}
/**
 * @see https://vkcom.github.io/VKUI/#/UsersStack
 */
export declare const UsersStack: React.FC<UsersStackProps>;
