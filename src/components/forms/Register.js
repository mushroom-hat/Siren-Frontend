import { registerFields } from "../../constants/formFields"
import FormAction from "./FormAction";
import Input from "./Input";
import { useState, useRef, useEffect, useContext } from 'react';
import axios from "../../api/axios";
import useAuth from '../../hooks/useAuth';
import { useNavigate, useLocation } from "react-router-dom";
import FormError from "./FormError";

// set default empty
const fields=registerFields;
let fieldsState={};
fields.forEach(field => fieldsState[field.id]='');

const Register = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home'; // get the page which the user came from


    const [registerState,setRegisterState]=useState(fieldsState);
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');

    const handleChange=(e)=>setRegisterState({...registerState,[e.target.id]:e.target.value});

    const handleSubmit= async (e)=>{
        e.preventDefault();
        try {
            //Handle Login API Integration here
            const response = await axios.post("/register", JSON.stringify({ username: registerState.username, password: registerState.password }),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            
            if (response.status === 200) {
                const accessToken = response?.data?.accessToken;
                console.log(accessToken)
                // set authprovider 
                setAuth({ user: registerState.username, accessToken: accessToken });
                //navigate("/home"); // redirect to the page which the user wanted to go before login page
                navigate(from, { replace: true })
            }

        }
        catch (error) {
            // Error response from server and display results
            if (!error?.response) {
                setErrMsg('No Server Response');
            } else if (error.response?.status === 400) {
                setErrMsg('Username and password are required.');
            } else if (error.response?.status === 409) {
                setErrMsg('Username already exists.');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    

    return(
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <FormError ref={errRef} aria-live="assertive" errMsg={errMsg}/>
        <div className="">
        {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={registerState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            autoComplete="off"
                    />
                
                )
            }
          <FormAction handleSubmit={handleSubmit} text="Create Account" />
        </div>

         

      </form>
    )
}

export default Register;