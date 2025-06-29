import React, { createContext, useEffect } from "react";
import { useNavigate } from "react-router";
import * as userService from "../services/userService";
import useToken from "../hooks/useToken";
import usePersistedUser from "../hooks/usePersistedUser";

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useToken();
  const [user, setUser] = usePersistedUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;

      try {
        const response = await userService.getCurrentUser();
        setUser(response);
      } catch (err) {
        console.log("Token expired or user not found");
        setToken(null);
        setUser(null);
      }
    };

    if (!user && token) {
      fetchUser();
    }
  }, [token]);

  const loginSubmitHandler = async (values) => {
    try {
      const response = await userService.login(values.email, values.password);
      setToken(response.token);
      setUser(response.user);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const registerSubmitHandler = async (values) => {
    try {
      const response = await userService.register(
        values.username,
        values.email,
        values.password,
        values.repeatPassword
      );
      if (response.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const logoutHandler = () => {
    setToken(null);
    setUser(null);
    navigate("/");
  };

  const values = {
    isAuthenticated: !!user,
    registerSubmitHandler,
    loginSubmitHandler,
    logoutHandler,
    username: user?.username,
    email: user?.email,
    userId: user?._id,
    token,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default AuthProvider;
