import * as React from "react";
import { NativeSelectProps } from "../NativeSelect/NativeSelect";
import { CustomSelectOptionProps } from "../CustomSelectOption/CustomSelectOption";
import { FormFieldProps } from "../FormField/FormField";
import { HasPlatform } from "../../types";
import { Placement } from "../Popper/Popper";
import { TrackerOptionsProps } from "../CustomScrollView/useTrackerVisibility";
import { SelectType } from "../Select/Select";
import "./CustomSelect.css";
declare type SelectValue = React.SelectHTMLAttributes<HTMLSelectElement>["value"];
export interface CustomSelectOptionInterface {
    value: SelectValue;
    label: React.ReactElement | string;
    disabled?: boolean;
    [index: string]: any;
}
export interface CustomSelectProps extends NativeSelectProps, HasPlatform, FormFieldProps, TrackerOptionsProps {
    /**
     * Если `true`, то при клике на селект в нём появится текстовое поле для поиска по `options`. По умолчанию поиск
     * производится по `option.label`.
     */
    searchable?: boolean;
    /**
     * Текст, который будет отображен, если приходит пустой `options`.
     */
    emptyText?: string;
    onInputChange?: (e: React.ChangeEvent, options: CustomSelectOptionInterface[]) => void | CustomSelectOptionInterface[];
    options: CustomSelectOptionInterface[];
    /**
     * Функция для кастомной фильтрации. По умолчанию поиск производится по `option.label`.
     */
    filterFn?: false | ((value: string, option: CustomSelectOptionInterface, getOptionLabel?: (option: Partial<CustomSelectOptionInterface>) => string) => boolean);
    popupDirection?: "top" | "bottom";
    /**
     * Рендер-проп для кастомного рендера опции.
     * В объекте аргумента приходят [свойства опции](https://vkcom.github.io/VKUI/#/CustomSelectOption?id=props)
     */
    renderOption?: (props: CustomSelectOptionProps) => React.ReactNode;
    /**
     * Рендер-проп для кастомного рендера содержимого дропдауна.
     * В `defaultDropdownContent` содержится список опций в виде скроллящегося блока.
     */
    renderDropdown?: ({ defaultDropdownContent, }: {
        defaultDropdownContent: React.ReactNode;
    }) => React.ReactNode;
    /**
     * Если `true`, то в дропдауне вместо списка опций рисуется спиннер. При переданных `renderDropdown` и `fetching: true`
     * "победит" `renderDropdown`.
     */
    fetching?: boolean;
    onClose?: VoidFunction;
    onOpen?: VoidFunction;
    icon?: React.ReactNode;
    dropdownOffsetDistance?: number;
    fixDropdownWidth?: boolean;
    forceDropdownPortal?: boolean;
    initialOpenState?: boolean;
    forceOpened?: boolean;
    forcePlacement?: Placement;
    selectType?: keyof typeof SelectType;
}
/**
 * @see https://vkcom.github.io/VKUI/#/CustomSelect
 */
export declare const CustomSelect: React.FC<Pick<CustomSelectProps, "form" | "slot" | "style" | "title" | "value" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "placeholder" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "platform" | "size" | "icon" | "after" | "multiple" | "disabled" | "status" | "mode" | "getRootRef" | "autoComplete" | "autoFocus" | "name" | "required" | "getRef" | "onOpen" | "onClose" | "before" | "align" | "options" | "popupDirection" | "multiline" | "onInputChange" | "selectType" | "searchable" | "emptyText" | "filterFn" | "renderOption" | "renderDropdown" | "fetching" | "dropdownOffsetDistance" | "fixDropdownWidth" | "forceDropdownPortal" | "initialOpenState" | "forceOpened" | "forcePlacement" | "autoHideScrollbar" | "autoHideScrollbarDelay"> & import("../AdaptivityProvider/AdaptivityContext").SizeProps>;
export {};
