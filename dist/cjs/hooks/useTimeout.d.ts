export declare function useTimeout(cb: () => any, duration: number | undefined | null): {
    set: (duration?: any) => void;
    clear: () => void;
};
