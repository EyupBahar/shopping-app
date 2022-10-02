import { useNavigate } from "react-router-dom";
import { Product } from "../types";

type ProductItemProps = {
  item: Product;
};

export const ProductItem = ({ item }: ProductItemProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`navigate(product-details/${item._id}`)}
      className="bg bg-slate-200 rounded-lg p-4 cursor-pointer"
    >
      <div className="h-[50%] justify-center items-center flex border border-red-500">
        <img
          src={item.avatar}
          alt="avatar"
          className="object-fill max-h-[100%] mx-auto"
        />
      </div>
      <div className="border border-red-500 h-[45%] overflow-auto flex flex-col items-start justify-end mt-4">
        <h1 className="text-[24px] font-medium">{item.name}</h1>
        <p className="pt-2">{item.description}</p>
        <p className="pt-2 font-medium">$ {item.price}</p>
      </div>
    </div>
  );
};
