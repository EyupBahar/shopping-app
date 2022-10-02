import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { favoritedProductReducer } from "./../features/products/favoriteProductSlice";
import productDetailsSlice from "../features/products/productDetailsSlice";
import productSlice from "../features/products/productSlice";
import productCategoriesSlice from "../features/products/productDetailsSlice";
import productCategorySlice from "../features/products/productCategorySlice";

export const rootReducer = combineReducers({
  product: productSlice,
  productDetails: productDetailsSlice,
  productCategories: productCategoriesSlice,
  productCategory: productCategorySlice,
  favoritedProduct: favoritedProductReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoritedProduct"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
