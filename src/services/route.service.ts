import {IRoute} from "../interfaces/route.interface.ts";
import LogInPage from "../pages/auth/LogIn.tsx";
import SignUp from "../pages/auth/SignUp.tsx";
import Homepage from "../pages/site/Homepage.tsx";

export const useRoutesService = (): IRoute[] => {
    const unprotectedRoutes: IRoute[] = [
        {
            path: "/login",
            name: "Login",
            element: LogInPage,
            protected: false
        },
        {
            path: "/signup",
            name: "Sign Up",
            element: SignUp,
            protected: false
        },
    ];

    const protectedRoutes: IRoute[] = [
        {
            path: "/",
            name: "Home",
            element: Homepage,
            protected: true
        }
    ];

    return [...unprotectedRoutes, ...protectedRoutes];
}