import { favoritedProductReducer } from "./../features/products/favoriteProductSlice";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productDetailsSlice from "../features/products/productDetailsSlice";
import productSlice from "../features/products/productSlice";
import productCategoriesSlice from "../features/products/productDetailsSlice";
import productCategorySlice from "../features/products/productCategorySlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    productDetails: productDetailsSlice,
    productCategories: productCategoriesSlice,
    productCategory: productCategorySlice,
    favoritedProduct: favoritedProductReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
