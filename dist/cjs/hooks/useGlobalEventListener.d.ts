export declare function useGlobalEventListener<K extends keyof GlobalEventHandlersEventMap>(element: Document | HTMLElement | Window | null | undefined, event: K, cb: ((ev: GlobalEventHandlersEventMap[K]) => void) | null | false | undefined, options?: AddEventListenerOptions): void;
export declare function useGlobalEventListener<E extends Event>(element: Document | HTMLElement | Window | null | undefined, event: string, cb: ((ev: E) => void) | null | false | undefined, options?: AddEventListenerOptions): void;