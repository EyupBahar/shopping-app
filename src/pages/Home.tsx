import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/products/productSlice";
import { ProductItem } from "../components/ProductItem";
import { Product, ProductCategory } from "../types";
import { fetchCategories } from "../features/products/productCategorySlice";
import { CategorySelector } from "../components/CategorySelector";

export const Home = () => {
  const productList = useAppSelector((state) => state.product.data);
  console.log("productList", productList);
  const dispatch = useAppDispatch();

  const favoriteState = useAppSelector((state) => state.favoritedProduct);
  console.log("favoriteState", favoriteState);

  console.log("favoriteState", Object.values(favoriteState));

  const [filteredProduct, setFilteredProduct] = useState<any>([]);

  const filteredProductList = productList.filter(({ name }) =>
    name.includes(filteredProduct)
  );
  console.log("filteredProductList", filteredProductList);

  const handleOnChange = (event: any) => {
    setFilteredProduct(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    // ? dispatch(fetchCategory()); KATEGORİYİ SEÇTİRİP ID sini yollanmalı //
  }, [dispatch]);

  return (
    <div className="">
      <div className="flex w-full justify-between border border-red-500 items-center">
        <input
          onChange={handleOnChange}
          type="text"
          className=" mx-[4rem] w-[400px] mt-[80px] rounded-lg py-2 pl-2 border-2 border-grey-500"
          placeholder="Search Product"
        />
        <CategorySelector />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-[4rem] pt-40">
        {filteredProductList?.map((item: any) => (
          <ProductItem item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};
