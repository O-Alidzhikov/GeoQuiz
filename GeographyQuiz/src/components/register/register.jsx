import React from "react";
import "./register.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const RegisterFormKeys = {
    username: "username",
    email: "email",
    password: "password",
    repeatPassword: "repeatPassword",
};

function Register() {
    const { registerSubmitHandler } = useContext(UserContext);
    const navigate = useNavigate();

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.username]: "",
        [RegisterFormKeys.email]: "",
        [RegisterFormKeys.password]: "",
        [RegisterFormKeys.repeatPassword]: "",
    });

    return (
        <div className="registerContainer">
            <div className="registerHeader">
                <div className="registerText">Register</div>
                <div className="registerUnderline"></div>
            </div>
            <div className="registerInputs">
                <form className="register-form" onSubmit={onSubmit}>
                    <div className="registerInput">
                        <img src="" alt="" />
                        <input
                            type="text"
                            placeholder="Name"
                            name={RegisterFormKeys.username} 
                            value={values[RegisterFormKeys.username]} 
                            onChange={onChange}
                        />
                    </div>
                    <div className="registerInput">
                        <img src="" alt="" />
                        <input
                            type="email"
                            placeholder="Email"
                            name={RegisterFormKeys.email} 
                            value={values[RegisterFormKeys.email]} 
                            onChange={onChange}
                        />
                    </div>
                    <div className="registerInput">
                        <img src="" alt="" />
                        <input
                            type="password"
                            placeholder="Password"
                            name={RegisterFormKeys.password}
                            value={values[RegisterFormKeys.password]} 
                            onChange={onChange}
                        />
                    </div>
                    <div className="registerInput">
                        <img src="" alt="" />
                        <input
                            type="password"
                            placeholder="Repeat Password"
                            name={RegisterFormKeys.repeatPassword} 
                            value={values[RegisterFormKeys.repeatPassword]} 
                            onChange={onChange}
                        />
                    </div>
                    <button type="submit" className="register-submit">
                        Register
                    </button>
                </form>
            </div>
            <div className="forgot-password">
                Lost Password? <span>Click here!</span>
            </div>
            <div className="register-submit-container">
                <button onClick={() => navigate('/login')} className="register-submit">
                    Login
                </button>
            </div>
        </div>
    );
}

export default Register;
