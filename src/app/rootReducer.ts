import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { favoritedProductReducer } from "../store/favoriteProductSlice";
import productDetailsSlice from "../store/productDetailsSlice";
import productSlice from "../store/productSlice";
import productCategoriesSlice from "../store/productDetailsSlice";
import productCategorySlice from "../store/productCategorySlice";

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
