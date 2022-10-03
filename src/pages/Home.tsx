import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../features/products/productSlice";
import { ProductItem } from "../components/ProductItem";
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
    <div className="px">
      <div className="flex flex-col md:flex-row w-full justify-between border border-grey-500 items-end px-[2rem] md:px-[4rem]">
        <input
          onChange={handleOnChange}
          type="text"
          className="w-full mt-4 md:w-[400px] md:mt-[80px] rounded-lg py-2 pl-2 border-2 border-grey-500"
          placeholder="Search Product"
        />
        <div className="w-full md:w-[250px] mt-4 md:mt-0">
          <CategorySelector />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-[2rem] md:px-[4rem] pt-[80px]">
        {filteredProductList?.map((item: any) => (
          <ProductItem item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};
