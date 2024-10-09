import {IRoute} from "../interfaces/route.interface.ts";
import LogInPage from "../pages/auth/LogIn.tsx";
import SignUpPage from "../pages/auth/SignUpFirstStep.tsx";


export const useRoutesService = (): IRoute[] => {
    const unprotectedRoutes: IRoute[] = [
        {
            path: "/login",
            name: "Login",
            element: LogInPage
        },
        {
            path: "/signup",
            name: "Sign Up",
            element: SignUpPage
        }
    ];

    const protectedRoutes: IRoute[] = [];

    return [...unprotectedRoutes, ...protectedRoutes];
}