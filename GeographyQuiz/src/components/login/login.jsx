import React from 'react';
import './login.css';
 // import { useForm } from "../../hooks/useForm"

function Login() {

    const loginKeys = {
        LoginEmail : "email",
        LoginPassword : "password"
    }
 //const {values, onChange, onSubmit} = useForm(loginSubmitHandler ,  {
        
  // })

    
    return (
        <>
            <div className="loginContainer"> 
                <div className="loginHeader">
                    <div className="loginText">Sign Up</div>
                    <div className="loginUnderline"></div>
                </div>
                <div className="loginInputs">
                    <div className="loginInput">
                        <img src="" alt="" />
                        <input type="text" placeholder="Name" /> 
                    </div>
                    <div className="loginInput">
                        <img src="" alt="" />
                        <input type="email" placeholder="Email" /> 
                    </div>
                    <div className="loginInput">
                        <img src="" alt="" />
                        <input type="password" placeholder="Password"/> 
                    </div>
                </div>
                <div className="forgot-password">Lost Password? <span>Click here!</span></div>
                <div className="login-submit-container">
                    <div className="login-submit">Sign Up</div>
                    <div className="login-submit">Login</div>
                </div>
            </div>
        </>
    );
}

export default Login;
