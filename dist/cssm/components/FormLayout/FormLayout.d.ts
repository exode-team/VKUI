import * as React from "react";
import { HasComponent, HasRef } from "../../types";
import "./FormLayout.css";
export declare type FormLayoutProps = React.AllHTMLAttributes<HTMLElement> & HasRef<HTMLElement> & HasComponent;
/**
 * @see https://vkcom.github.io/VKUI/#/FormLayout
 */
declare const FormLayout: React.FC<FormLayoutProps>;
export default FormLayout;
