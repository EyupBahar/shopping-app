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
    <div className="border">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <select>
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
