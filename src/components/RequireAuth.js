import { useLocation, Navigate, Outlet } from "react-router-dom";
import useDecodeJwt from "../hooks/useDecodeJWT";
import useAuth from "../hooks/useAuth";

const RequireAuth = ( { allowedRoles }) => {
    const { auth } = useAuth();

    // get the current location
    const location = useLocation();

    const decoded = useDecodeJwt();

    const roles = decoded?.UserInfo?.roles || []
    // if the user is not logged in, redirect to login page
    // if the user is logged in, but does not have the required role, redirect to unauthorized page
    return (
        roles.find(role => allowedRoles?.includes(role)) ? <Outlet /> 
        : auth?.accessToken ? <Navigate to={{ pathname: "/unauthorized", state: { from: location } }} replace />
        : <Navigate to={{ pathname: "/", state: { from: location } }} replace />
    );
}

export default RequireAuth