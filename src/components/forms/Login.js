import { useState, useRef, useEffect, useContext } from 'react';
import { loginFields } from "../../constants/formFields";
import FormAction from "./FormAction";
import FormError from "./FormError";
import FormExtra from "./FormExtra";
import Input from "./Input";
import axios from "../../api/axios";
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from "react-router-dom";

// set empty login fields
const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');


const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const navTarget = location.state?.from?.pathname || '/home'; // get the page which the user came from

    const [loginState,setLoginState]=useState(fieldsState);
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');

    // when new values are added to the fields, update the state
    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault(); // default behavior reloads the page
        try {
            //Handle Login API Integration here
            const response = await axios.post("/auth", JSON.stringify({ username: loginState.username, password: loginState.password }),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            
            if (response.status === 200) {
                const accessToken = response?.data?.accessToken;
                // set authprovider 
                setAuth({ user: loginState.username, accessToken: accessToken });
                //navigate("/home"); // redirect to the page which the user wanted to go before login page
                navigate(navTarget, { replace: true })
            }

        }
        catch (error) {
            // Error response from server and display results
            if (!error?.response) {
                setErrMsg('No Server Response. Please try again.');
            } else if (error.response?.status === 400) {
                setErrMsg('Missing Username or Password.');
            } else if (error.response?.status === 401) {
                setErrMsg('Invalid username or password.');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }



    return(
        <>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <FormError ref={errRef} aria-live="assertive" errMsg={errMsg}/>
            <div className="space-y-6">
                {
                    fields.map((field) => (
                        <Input
                        key={field.id}
                        handleChange={handleChange}
                        value={loginState[field.id]}
                        labelText={field.labelText}
                        labelFor={field.labelFor}
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        isRequired={field.isRequired}
                        autoComplete="off"
                        />
                    ))
                }
            </div>
            <FormExtra/>
            <FormAction handleSubmit={handleSubmit} text="Login"/>
          </form>
            
        </>
       
    )
}

export default Login;
