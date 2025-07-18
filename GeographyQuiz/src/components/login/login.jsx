import React, { useContext } from "react";
import "./login.css";
import ErrorRibbon from "../error ribbon/ErrorRibbon";
import { UserContext } from "../../contexts/userContext";
import useForm from "../../hooks/useForm";

const LoginFormKeys = {
  email: "email",
  password: "password",
};

function Login() {
  const { loginSubmitHandler, err } = useContext(UserContext);

  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.email]: "",
    [LoginFormKeys.password]: "",
  });

  return (
    <div className="loginContainer">
      <div className="loginHeader">
        <h1 className="loginText">Welcome Back</h1>
        <p className="loginSubtext">Please enter your details to sign in</p>
        {err.length > 0 && <ErrorRibbon  error={err} />}
      </div>

      <form onSubmit={onSubmit} className="loginInputs">
        <div className="loginInput">
          <label htmlFor={LoginFormKeys.email}>Email</label>
          <div className="inputField">
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z"
                fill="#64748B"
              />
            </svg>
            <input
              id={LoginFormKeys.email}
              type="email"
              placeholder="Enter your email"
              name={LoginFormKeys.email}
              value={values[LoginFormKeys.email]}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="loginInput">
          <label htmlFor={LoginFormKeys.password}>Password</label>
          <div className="inputField">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 8H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V8H2C0.9 8 0 8.9 0 10V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V10C16 8.9 15.1 8 14 8ZM8 15C6.9 15 6 14.1 6 13C6 11.9 6.9 11 8 11C9.1 11 10 11.9 10 13C10 14.1 9.1 15 8 15ZM5 8V5C5 3.34 6.34 2 8 2C9.66 2 11 3.34 11 5V8H5Z"
                fill="#64748B"
              />
            </svg>
            <input
              id={LoginFormKeys.password}
              type="password"
              placeholder="Enter your password"
              name={LoginFormKeys.password}
              value={values[LoginFormKeys.password]}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="login-submit">
          Sign In
        </button>
        <p className="signup-link">
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
