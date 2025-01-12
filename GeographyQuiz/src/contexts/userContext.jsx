import React, { createContext, useState, useContext } from "react";
import Cookies from 'js-cookie';
import * as userService from "../services/userService";

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function loginSubmitHandler(values) {
    try {
      const response = await userService.login(values.email, values.password,);
      console.log("Login successful:", response);
      Cookies.set('auth-token', response.token, { expires: 7 }); 
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }
  const registerSubmitHandler = async (values) => {
    try {
      const response = await userService.register(
        values.username,
        values.email,
        values.password,
        values.repeatPassword
      );
      console.log(response)

       localStorage.setItem("accessToken", result.accessToken)
      if (response.ok) {
        setIsAuthenticated(true);
      }
      console.log("Registration successful:", response);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  const values = {
    isAuthenticated,
    registerSubmitHandler,
    loginSubmitHandler,
    logoutHandler,
    username: isAuthenticated.username,
    email: isAuthenticated.email,
    password: isAuthenticated.password,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default AuthProvider;
