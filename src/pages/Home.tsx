/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchProducts } from "../store/productSlice";
import { ProductItem } from "../components/ProductItem";
import { fetchCategories } from "../store/productCategorySlice";
import { CategorySelector } from "../components/CategorySelector";
import { ProductCategory } from "../types";

export const Home = () => {
  const productList = useAppSelector((state) => state.product.data);
  const dispatch = useAppDispatch();
  const [filteredProductList, setFilteredProductList] = useState(productList);
  const [filterString, setFilterString] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState("");

  useEffect(() => {
    filterProductList();
  }, [filterString, selectedCategoryName, productList]);

  const filterProductList = () => {
    setFilteredProductList(
      productList.filter(
        ({ name, category }) =>
          name.toLowerCase().includes(filterString.toLowerCase()) &&
          category.includes(selectedCategoryName)
      )
    );
  };

  const handleOnChange = (event: any) => {
    setFilterString(event.target.value);
  };

  const handleCategoryChange = (name: ProductCategory["name"]) => {
    setSelectedCategoryName(name);
  };
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
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
          <CategorySelector onChange={handleCategoryChange} />
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
