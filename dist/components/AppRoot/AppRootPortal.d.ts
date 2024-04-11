import * as React from "react";
export interface AppRootPortalProps {
    className?: string;
    forcePortal?: boolean;
    children?: React.ReactNode;
}
export declare const AppRootPortal: ({ children, className, forcePortal, }: AppRootPortalProps) => JSX.Element;