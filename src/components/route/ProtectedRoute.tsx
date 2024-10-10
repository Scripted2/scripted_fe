import {Navigate, useLocation} from 'react-router-dom';
import {IProtectedRoute} from "../../interfaces/route.interface.ts";
import {jwtDecode} from "jwt-decode";
import {IDecodedToken} from "../../interfaces/auth.interface.ts";
import {environment} from "../../services/environment.service.ts";

const ProtectedRoute = ({children}: IProtectedRoute) => {
    const location = useLocation();
    const accessToken = localStorage.getItem(environment.local_storage.accessToken);
    const refreshToken = localStorage.getItem(environment.local_storage.refreshToken);
    let isAuthenticated = false;

    if (accessToken && refreshToken) {
        const decodedAccess = jwtDecode<IDecodedToken>(accessToken);
        const decodedRefresh = jwtDecode<IDecodedToken>(refreshToken);
        const currentTime = Date.now() / 1000;

        if (decodedAccess.exp > currentTime || decodedRefresh.exp > currentTime) {
            isAuthenticated = true;
        }
    }

    if (!isAuthenticated) {
        localStorage.removeItem(environment.local_storage.accessToken);
        localStorage.removeItem(environment.local_storage.refreshToken);
        localStorage.removeItem(environment.local_storage.userData);
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return children;
};

export default ProtectedRoute;