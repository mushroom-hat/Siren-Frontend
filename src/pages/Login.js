import Header from "../components/forms/Header"
import Login from "../components/forms/Login"
import useAuth from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
    // if user is logged in, redirect to home page, otherwise navigate to login page
    const navigate = useNavigate();
    const { auth } = useAuth();
    useEffect(() => {
        if (auth?.accessToken){
            navigate('/home', { replace: true });
        }
    
    }, [])
    
    return(
        <>
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="bg-white py-8 px-6 rounded-3xl sm:px-10 shadow-lg">
                    <Header
                        heading="Sign In"
                        paragraph="Don't have an account yet? "
                        linkName="Signup"
                        linkUrl="/register"
                        />
                    <Login/>
                    {/* oauth */}
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-96 h-px my-10 bg-gray-200 border-0 dark:bg-gray-500"></hr>
                        <span className="absolute px-2 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-grey">OR</span>
                    </div>
                    </div>
                
                <p className="text-center text-gray-400 text-xs">
                &copy;2023 mushroomhat. All rights reserved.
                </p>
            </div>
        </div>

        </>
    )
}

export default LoginPage;