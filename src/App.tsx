/* eslint-disable react-hooks/exhaustive-deps */

import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { CreateProduct } from "./pages/CreateProduct";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { FavoriteProducts } from "./pages/FavoriteProducts";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product-details/:id" element={<ProductDetailsPage />} />
        <Route path="create-product" element={<CreateProduct />}></Route>
        <Route path="favorite-product" element={<FavoriteProducts />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
