import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as userService from "../services/userService";
import useToken from "../hooks/useToken";
import usePersistedUser from "../hooks/usePersistedUser";

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useToken();
  const [user, setUser] = usePersistedUser();
  const [err, setErr] = useState([]);
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
      setErr([]);
      const response = await userService.login(values.email, values.password);
      setToken(response.token);
      setUser(response.user);
      navigate("/");
    } catch (error) {
      console.log("Validation errors:", error.message);

      if (error.status === 400) {
        setErr(error.message);
      } else {
        setErr("Something went wrong");
      }
    }
  };

  const registerSubmitHandler = async (values) => {
    try {
      setErr([]);
      const response = await userService.register(
        values.username,
        values.email,
        values.password
      );
      if (response.ok) {
        navigate("/login");
      }
    } catch (err) {
      console.log("Validation errors:", err.data.errors);

      if (err.status === 400) {
        setErr(err.data.errors || [err.message]);
        console.log(err);
      } else {
        setErr([err.message || "Something went wrong"]);
      }
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
    err: err,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default AuthProvider;
