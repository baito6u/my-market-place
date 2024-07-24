import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";

import Navigation from "./components/navigation/Navigation";
import HomePage from "./components/home/HomePage";
import Footer from "./components/footer/Footer";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import CatalogPage from "./components/catalog/CatalogPage";
import MyCartPage from "./components/myCart/MyCartPage";
import CreateProduct from "./components/create/CreateProduct";
import DetailsPage from "./components/details/DetailsPage";
import LogoutPage from "./components/logout/LogoutPage";

function App() {
  return (
    <AuthProvider>
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
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
