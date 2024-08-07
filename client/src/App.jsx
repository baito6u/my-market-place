import { Routes, Route } from "react-router-dom";

import "./App.css"

import { AuthProvider } from "./contexts/authContext";
import { CartProvider } from "./contexts/cartContext";
import ErrorBoundary from "./components/ErrorBoundary";
import AuthGuard from "./components/guards/AuthGuard";
import GuestGuard from "./components/guards/GuestGuard";

import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import RegisterPage from "./components/register/RegisterPage";
import CatalogPage from "./components/catalog/CatalogPage";
import MyCartPage from "./components/myCart/MyCartPage";
import CreateProduct from "./components/create/CreateProduct";
import DetailsPage from "./components/details/DetailsPage";
import LogoutPage from "./components/logout/LogoutPage";
import EditProductPage from "./components/edit/EditProductPage";
import NotFoundPage from "./components/notFound/NotFoundPage";
import AboutPage from "./components/contact/AboutPage";
import MyProductsPage from "./components/myProducts/MyProductsPage";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <div className="wrapper">
            <Navigation />

            <main className="box">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/catalog/:productId/details" element={<DetailsPage />}/>
                
                <Route element={<GuestGuard />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                </Route>

                <Route element={<AuthGuard />}>
                  <Route path="/create" element={<CreateProduct />} />
                  <Route path="/catalog/:productId/edit" element={<EditProductPage />}/>
                  <Route path="/mycart" element={<MyCartPage />} />
                  <Route path="/myproducts" element={<MyProductsPage />} />
                  <Route path="/logout" element={<LogoutPage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>

            <Footer />
          </div>
          </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
