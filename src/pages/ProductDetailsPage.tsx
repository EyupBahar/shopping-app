import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProductDetails } from "../features/products/productSlice";

export const ProductDetailsPage = () => {
  const productList = useAppSelector((state) => state.product.data);
  
  const [filtered, setFiltered] = useState("");

  console.log("product from ALL PRODUCTS", productList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductDetails());
  }, []);

  return <div>productDetailsPage</div>;
};
