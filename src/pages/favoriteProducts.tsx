import React from "react";
import { useAppSelector } from "../app/hooks";

export const FavoriteProducts = () => {
  const favoriteState = useAppSelector((state) => state.favoritedProduct);
  console.log("favoriteState", favoriteState);
  const favoriteProductList = Object.values(favoriteState);

  return (
    <div>
      {!favoriteProductList.length ? (
        <div className="w-full h-screen text-[36px] font-semibold text-red-400 flex items-center justify-center">
          There is No Favorite Product to Show !
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-[4rem] pt-40">
          {favoriteProductList.map((item) => (
            <div className="flex flex-col md:flex-row items-center justify-around mx-auto bg-slate-200 p-4 rounded-md">
              <div>
                <img
                  src={item.avatar}
                  alt="avatar"
                  className="w-full md:max-w-[70%] h-[400px] rounded-xl"
                />
              </div>
              <div className="w-full mt-4 md:mt-0 md:max-w-[50%] items-start justify-center flex flex-col">
                <h1 className="text-[24px] font-medium">{item.name}</h1>
                <p className="pt-2 overflow-auto font-extralight">
                  {item.description}
                </p>
                <p className="pt-2 font-medium">$ {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
