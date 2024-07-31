import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authAPI from "../api/authAPI";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});

  const loginSubmitHandler = async (values) => {
    try {
      const result = await authAPI.login(values.email, values.password);

      setAuth(result);
      localStorage.setItem("accessToken", result.accessToken);
      navigate("/");
    } catch (error) {
      throw new Error(error.message || "Login failed");
    }
  };

  const registerSubmitHandler = async (values) => {
    try {
      const result = await authAPI.register(
        values.username,
        values.email,
        values.password
      );

      setAuth(result);

      localStorage.setItem("accessToken", result.accessToken);

      navigate("/");
    } catch (error) {
      throw new Error(error.message || "Registration failed");
    }
  };

  const logoutHandler = () => {
    setAuth({});

    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;