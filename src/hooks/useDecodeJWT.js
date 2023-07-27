import useAuth from "../hooks/useAuth";
import jwt_decode from "jwt-decode";

 const useDecodeJWT = () => {
    // get the auth state from the context
    const { auth } = useAuth();

    const decoded = auth?.accessToken 
        ? jwt_decode(auth.accessToken)
        : undefined;

  return decoded;
}

export default useDecodeJWT;