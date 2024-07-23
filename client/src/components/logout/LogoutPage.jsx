import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authAPI from "../../api/authAPI";
import AuthContext from "../../contexts/authContext";

function LogoutPage() {
  const navigate = useNavigate();
  const { logoutHandler } = useContext(AuthContext);

  useEffect(() => {
    authAPI
      .logout()
      .then(() => {
        logoutHandler();
        navigate("/");
      })
      .catch(() => navigate("/"));

    
  }, []);

  return null;
}

export default LogoutPage;
