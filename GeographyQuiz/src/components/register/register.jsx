import React, { useContext } from "react";
import "./register.css";
import { UserContext } from "../../contexts/userContext";
import ErrorRibbon from "../error ribbon/ErrorRibbon";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const RegisterFormKeys = {
  username: "username",
  email: "email",
  password: "password",
  repeatPassword: "repeatPassword",
};

function Register() {
  const { registerSubmitHandler, err } = useContext(UserContext);
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
        <h1 className="registerText">Create Account</h1>
        <p className="registerSubtext">
          Join us by filling out the information below
        </p>
        {err &&
          err.map((error, index) => <ErrorRibbon key={index} error={error} />)}
      </div>

      <form onSubmit={onSubmit} className="registerInputs">
        <div className="registerInput">
          <label htmlFor={RegisterFormKeys.username}>Full Name</label>
          <div className="inputField">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z"
                fill="#64748B"
              />
            </svg>
            <input
              id={RegisterFormKeys.username}
              type="text"
              placeholder="Enter your full name"
              name={RegisterFormKeys.username}
              value={values[RegisterFormKeys.username]}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="registerInput">
          <label htmlFor={RegisterFormKeys.email}>Email</label>
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
              id={RegisterFormKeys.email}
              type="email"
              placeholder="Enter your email"
              name={RegisterFormKeys.email}
              value={values[RegisterFormKeys.email]}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="registerInput">
          <label htmlFor={RegisterFormKeys.password}>Password</label>
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
              id={RegisterFormKeys.password}
              type="password"
              placeholder="Create a password"
              name={RegisterFormKeys.password}
              value={values[RegisterFormKeys.password]}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="registerInput">
          <label htmlFor={RegisterFormKeys.repeatPassword}>
            Confirm Password
          </label>
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
              id={RegisterFormKeys.repeatPassword}
              type="password"
              placeholder="Confirm your password"
              name={RegisterFormKeys.repeatPassword}
              value={values[RegisterFormKeys.repeatPassword]}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="register-submit">
          Create Account
        </button>

        <p className="login-link">
          Already have an account?{" "}
          <a
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
          >
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;
