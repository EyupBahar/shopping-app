import React from "react";
import { useAppSelector } from "../app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProductCategory } from "../types";
import { productService } from "../services/product";

export const CategorySelector = () => {
  const category = useAppSelector((state) => state.productCategory);
  console.log("from CategorySelector === >>>>>", category);
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductCategory>();
  const onSubmit: SubmitHandler<ProductCategory> = async () => {
    await productService.getProductCategories();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col  w-[400px]">
          <label htmlFor="" className="mt-2">
            Name
          </label>
          {category.categories.map((option) => (
            <option key={option._id} value={option.name}>
              {option.name}
            </option>
          ))}
        </div>
      </form>
    </div>
  );
};
