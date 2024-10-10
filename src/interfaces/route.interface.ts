import {ReactNode} from "react";

export interface IRoute {
    path: string;
    name: string;
    element: (() => ReactNode);
}