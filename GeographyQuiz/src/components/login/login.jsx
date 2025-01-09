import React, { useContext } from 'react';
import './login.css';
import { UserContext } from '../../contexts/userContext';
import useForm from '../../hooks/useForm';

const LoginFormKeys = {
    email: "email",
    password: "password",
};

function Login() {
    const { loginSubmitHandler } = useContext(UserContext);

    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.email]: "",
        [LoginFormKeys.password]: "",
    });

    return (
        <>
            <div className="loginContainer">
                <div className="loginHeader">
                    <div className="loginText">Sign Up</div>
                    <div className="loginUnderline"></div>
                </div>
                <div className="loginInputs">
                    <form onSubmit={onSubmit}>
                        <div className="loginInput">
                            <img src="" alt="Email Icon" />
                            <input
                                type="email"
                                placeholder="Email"
                                name={LoginFormKeys.email}
                                value={values[LoginFormKeys.email]}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="loginInput">
                            <img src="" alt="Password Icon" />
                            <input
                                type="password"
                                placeholder="Password"
                                name={LoginFormKeys.password}
                                value={values[LoginFormKeys.password]}
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="forgot-password">
                            Lost Password? <span>Click here!</span>
                        </div>
                        <div className="login-submit-container">
                            <button type="submit" className="login-submit">
                                Sign Up
                            </button>
                            <button
                                type="button"
                                className="login-submit"
                                onClick={() => console.log('Redirecting to Login...')}
                            >
                               This one doesnt work
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
