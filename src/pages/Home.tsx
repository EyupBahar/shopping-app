import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/products/productSlice";
import { ProductItem } from "../components/ProductItem";
import { Product, ProductCategory } from "../types";
import { fetchCategories } from "../features/products/productCategorySlice";
import { CategorySelector } from "../components/CategorySelector";

export const Home = () => {
  const productList = useAppSelector((state) => state.product.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    // ? dispatch(fetchCategory()); KATEGORİYİ SEÇTİRİP ID sini yollanmalı //
  }, [dispatch]);

  return (
    <div className="bg bg-slate-200">
      <input
        /* onChange={(e) => setFilteredProduct(e.target.value)} */
        type="text"
        className=" mx-[4rem] w-[400px] mt-[80px] rounded-lg py-2 pl-2"
        placeholder="Search Product"
      />
      <CategorySelector />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-[4rem] pt-40">
        {productList?.map((item: any) => (
          <ProductItem item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};
