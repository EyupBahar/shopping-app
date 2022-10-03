/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useAppSelector } from "../app/hooks";

export const ProductDetailsPage = () => {
  const selectedProduct = useAppSelector(
    (state) => state.productDetails.selectedProduct
  );
  useEffect(() => {}, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full p-4 mx-[2rem] md:px-0 md:w-[50%] flex flex-col md:flex-row items-center justify-around md:mx-auto bg-slate-200 rounded-md">
        <div className=" flex justify-center">
          <img
            src={selectedProduct.avatar}
            alt="avatar"
            className="w-full md:max-w-[70%] h-[400px] rounded-xl"
          />
        </div>
        <div className="w-full mt-4 md:mt-0 md:max-w-[50%] items-start justify-center flex flex-col">
          <h1 className="text-[24px] font-medium">{selectedProduct.name}</h1>
          <p className="pt-2 overflow-auto font-extralight">
            {selectedProduct.description}
          </p>
          <p className="pt-2 font-medium">$ {selectedProduct.price}</p>
        </div>
      </div>
    </div>
  );
};
