import { Star } from "react-feather";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { deleteFavoriteProduct } from "../store/favoriteProductSlice";
import { truncate } from "../utils/truncate";

export const FavoriteProducts = () => {
  const dispatch = useAppDispatch();
  const favoriteState = useAppSelector((state) => state.favoritedProduct);
  const favoriteProductList = Object.values(favoriteState);

  return (
    <div>
      {!favoriteProductList.length ? (
        <div className="w-full h-screen text-[36px] font-semibold text-red-400 flex items-center justify-center">
          There is No Favorite Product to Show !
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-[4rem] pt-20">
          {favoriteProductList.map((item) => (
            <div className="flex flex-col md:flex-col items-center justify-around mx-auto bg-slate-200 p-4 rounded-md relative">
              <Star
                color="blue"
                onClick={() => dispatch(deleteFavoriteProduct(item))}
                className="absolute top-2 left-2"
              />
              {/*  <div className="w-full flex justify-start items-start">
              </div> */}
              <div className="mt-6 justify-center items-center h-full">
                <div className="flex items-center justify-center">
                  <img
                    src={item.avatar}
                    alt="avatar"
                    className="w-full md:max-w-[70%] h-[300px] rounded-xl"
                  />
                </div>
                <div className="w-full mt-4 md:mt-0 items-start justify-center flex flex-col">
                  <h1 className="text-[18px] md:text-[24px] mt-4 font-medium w-full">
                    {truncate(item.name, 20)}
                  </h1>
                  <p className="pt-2 overflow-auto font-extralight">
                    {item.description}
                  </p>
                  <p className="pt-2 font-medium flex justify-end">
                    $ {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
