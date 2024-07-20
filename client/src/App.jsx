import {Routes, Route} from "react-router-dom"

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
  return (
    <div className="wrapper">
      <Navigation />

      <main className="box">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/catalog" element={<CatalogPage />}/>
          <Route path="/catalog/:productId/details" element={<DetailsPage />}/>
          <Route path="/cart" element={<MyCartPage />}/>
          <Route path="/create" element={<CreateProduct />}/>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
