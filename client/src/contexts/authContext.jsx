import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authAPI from "../api/authAPI";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("accessToken");

    return {};
  });

  const loginSubmitHandler = async (values) => {
    const result = await authAPI.login(values.email, values.password);

    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);

    navigate("/");
  };

  const registerSubmitHandler = async (values) => {
    console.log(values);
    const result = await authAPI.register(
      values.username,
      values.email,
      values.password
    );

    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);

    navigate("/login");
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
  };
    
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
