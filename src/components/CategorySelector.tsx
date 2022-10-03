import { useAppSelector } from "../app/hooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProductCategory } from "../types";
import { productService } from "../services/product";

export const CategorySelector = () => {
  const category = useAppSelector((state) => state.productCategory);
  console.log("from CategorySelector === >>>>>", category.categories);

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
    <div className="border-2 border-gray-300 rounded-lg px-2 md:w-[250px]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <select className="w-full py-2 !outline-none">
            <option value="All">Categories</option>
            {category?.categories?.map((item) => (
              <option key={item?._id} value={item?.name}>
                {item?.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};
