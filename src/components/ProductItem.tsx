import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { setFavoritedProduct } from "../features/products/favoriteProductSlice";
import { fetchProductDetails } from "../features/products/productDetailsSlice";
import { Product } from "../types";
import { truncate } from "../utils/truncate";

type ProductItemProps = {
  item: Product;
};

export const ProductItem = ({ item }: ProductItemProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => {
        dispatch(fetchProductDetails(item._id));
        navigate(`product-details/${item._id}`);
        console.log("item id", item._id);
      }}
      className="rounded-lg p-4 cursor-pointer bg-blue-100 mb-20 flex flex-col justify-between h-[500px]"
    >
      {/* <p onClick={() => dispatch(setFavoritedProduct(item._id))}> favori </p> */}
      <div className="h-[50%] justify-center items-center flex bg-white rounded-lg">
        <img
          src={item.avatar}
          alt="avatar"
          className="object-contain h-[50%] mx-auto w-full"
        />
      </div>
      <div className=" h-[50%] mt-4 overflow-auto flex flex-col items-start justify-start">
        <h1 className="text-[24px] font-medium">{item.name}</h1>
        <p className="pt-2 overflow-auto h-[150px]">{truncate(item.description, 130)}</p>
        <p className="pt-2 font-medium">$ {item.price}</p>
      </div>
    </div>
  );
};
