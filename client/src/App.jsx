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
import EditProductPage from "./components/edit/EditProductPage";
import ErrorBoundary from "./components/ErrorBoundary";
import AuthGuard from "./components/guards/AuthGuard";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <div className="wrapper">
          <Navigation />

          <main className="box">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/catalog/:productId/details" element={<DetailsPage />}/>
              
              <Route element={<AuthGuard />}>
                <Route path="/create" element={<CreateProduct />} />
                <Route path="/catalog/:productId/edit" element={<EditProductPage />}/>
                <Route path="/cart" element={<MyCartPage />} />
                <Route path="/logout" element={<LogoutPage />} />
                </Route>
            </Routes>
          </main>

          <Footer />
        </div>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
