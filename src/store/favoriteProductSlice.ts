import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Product } from "../types";

export type FavoritedProduct = Product;

type FavoritedProductStore = {
  [key: string]: Product;
};

const initialState: FavoritedProductStore = {};

export const favoritedProductSlice = createSlice({
  name: "favoritedProduct",
  initialState,
  reducers: {
    setFavoritedProduct: (state, action: PayloadAction<FavoritedProduct>) => {
      state[action.payload._id] = action.payload;
    },
    deleteFavoriteProduct: (state, action: PayloadAction<FavoritedProduct>) => {
      delete state[action.payload._id];
    },
  },
});

export const { setFavoritedProduct, deleteFavoriteProduct } =
  favoritedProductSlice.actions;

export const favoritedProductSelector = (state: RootState) =>
  state.favoritedProduct;

export const favoritedProductReducer = favoritedProductSlice.reducer;
