import { useState } from "react";
import { ArrowRight, Star } from "react-feather";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import {
  deleteFavoriteProduct,
  setFavoritedProduct,
} from "../features/products/favoriteProductSlice";
import { fetchProductDetails } from "../features/products/productSlice";
/* import { fetchProductDetails } from "../features/products/productDetailsSlice"; */
import { Product } from "../types";
import { truncate } from "../utils/truncate";

type ProductItemProps = {
  item: Product;
};

export const ProductItem = ({ item }: ProductItemProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [favorited, setFavorited] = useState(false);

  return (
    <div className="rounded-lg p-4 cursor-pointer bg-blue-100 mb-20 flex flex-col justify-between h-[500px]">
      <p
        onClick={() => {
          dispatch(setFavoritedProduct(item));
          setFavorited(!favorited);
        }}
      >
        {favorited ? <Star color="blue" /> : <Star color="black" />}
      </p>
      <p onClick={() => dispatch(deleteFavoriteProduct(item))}> favori </p>
      <div className="h-[50%] justify-center items-center flex bg-white rounded-lg mt-2">
        <img
          src={item.avatar}
          alt="avatar"
          className="object-contain h-[50%] mx-auto w-full"
        />
      </div>
      <div className=" h-[50%] mt-4 overflow-auto flex flex-col items-start justify-start">
        <h1 className="text-[24px] font-medium">{item.name}</h1>
        <p className="pt-2 overflow-auto h-[150px]">
          {truncate(item.description, 130)}
        </p>
        <div className="pt-2 font-medium flex justify-between w-full">
          <div>$ {item.price}</div>
          <div
            onClick={() => {
              dispatch(fetchProductDetails(item._id));
              navigate(`product-details/${item._id}`);
            }}
            className="w-[80px] flex justify-between"
          >
            <div> More </div>
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};
