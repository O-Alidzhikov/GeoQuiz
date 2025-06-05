import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import Cookies from 'js-cookie';
import * as userService from "../services/userService";

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate()


    useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await userService.getCurrentUser(); // Calls /me
        setUser(response); 
      } catch (err) {
        console.log("Not logged in or token expired.");
      }
    };

    fetchUser();
  }, []);



  async function loginSubmitHandler(values) {
    try {
      const response = await userService.login(values.email, values.password);
      console.log(response.user);
      setIsAuthenticated(response.user)
       // const token = Cookies.get("auth-token");
      navigate("/")
     
     
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
      console.log("this is the response" ,response.user)
      navigate("/login")

      // localStorage.setItem("accessToken", result.accessToken)
      
      if (response.ok) {
        setIsAuthenticated(true);
        console.log("Registration successful:", response);
      }
      
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
    Cookies.remove("auth-token");
    navigate("/");
  };

  const values = {
    isAuthenticated,
    registerSubmitHandler,
    loginSubmitHandler,
    logoutHandler,
    username: isAuthenticated.username,
    email: isAuthenticated.email,
    // password: isAuthenticated.password,
    userId: isAuthenticated._id,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default AuthProvider;
