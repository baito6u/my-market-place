import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as authAPI from "./api/authAPI";
import AuthContext from "./contexts/authContext";

import Navigation from "./components/navigation/Navigation";
import HomePage from "./components/home/HomePage";
import Footer from "./components/footer/Footer";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import CatalogPage from "./components/catalog/CatalogPage";
import MyCartPage from "./components/myCart/MyCartPage";
import CreateProduct from "./components/create/CreateProduct";
import DetailsPage from "./components/details/DetailsPage";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    const result = await authAPI.login(values.email, values.password);

    setAuth(result);

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

    navigate("/login");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.email,
  };

  return (
    <AuthContext.Provider value={values}>
      <div className="wrapper">
        <Navigation />

        <main className="box">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route
              path="/catalog/:productId/details"
              element={<DetailsPage />}
            />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart" element={<MyCartPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
