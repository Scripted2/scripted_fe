import {ReactNode} from "react";

export interface IRoute {
    protected: boolean;
    path: string;
    name: string;
    element: (() => ReactNode);
}

export interface IProtectedRoute {
    children: ReactNode;
}