import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/products/productSlice";
import { ProductItem } from "../components/ProductItem";

export const Home = () => {
  const productList = useAppSelector((state) => state.product.data);

  const [filtered, setFiltered] = useState("");

  console.log("product from ALL PRODUCTS", productList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = () => {};

  return (
    <div className=" grid grid-cols-3 gap-10 px-[4rem] pt-40">
      {productList?.map((item) => (
        <ProductItem item={item} key={item._id} />
      ))}
    </div>
  );
};
