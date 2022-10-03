import { useAppSelector } from "../app/hooks";
import { ProductCategory } from "../types";

type CategorySelectorProps = {
  onChange: (name: ProductCategory["name"]) => void;
};

export const CategorySelector = ({ onChange }: CategorySelectorProps) => {
  const category = useAppSelector((state) => state.productCategory);

  return (
    <div className="border-2 border-gray-300 rounded-lg px-2 md:w-[250px]">
      <div className="w-full">
        <select
          className="w-full py-2 !outline-none"
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Categories</option>
          {category?.categories?.map((item) => (
            <option key={item?._id} value={item?.name}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
