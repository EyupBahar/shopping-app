/* eslint-disable react-hooks/exhaustive-deps */

import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { CreateProduct } from "./pages/createProduct";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";

export const App = () => {
  /* const product = useAppSelector((state) => state.product);
  console.log("product", product.data);
  const dispatch = useDispatch<AppDispatch>(); */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product-details/:id" element={<ProductDetailsPage />} />
        <Route path="create-product" element={<CreateProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
