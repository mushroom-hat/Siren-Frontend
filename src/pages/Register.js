import Header from "../components/forms/Header";
import Register from "../components/forms/Register";
const RegisterPage = () => {

    return(
        <>
            <div className="min-h-full bg-gray-100 h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="bg-white py-8 px-6 rounded-3xl sm:px-10 shadow-lg">
                        <Header
                        heading="Create Account"
                        paragraph="Already have an account? "
                        linkName="Login"
                        linkUrl="/"
                        />
                        <Register/>
                    </div>
                    <p className="text-center text-gray-400 text-xs">
                    &copy;2023 mushroomhat. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default RegisterPage;