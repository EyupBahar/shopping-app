import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "../../types";

export type FavoritedProduct = string;

type FavoritedProductStore = { favoritedProduct: string };

const initialState: FavoritedProductStore = { favoritedProduct: "" };

export const favoritedProductSlice = createSlice({
  name: "favoritedProduct",
  initialState,
  reducers: {
    setFavoritedProduct: (state, action: PayloadAction<FavoritedProduct>) => {
      const newFavoritedProduct = action.payload;
      state.favoritedProduct = newFavoritedProduct;
      console.log("newFavoritedProduct ===>>>>", newFavoritedProduct);
    },
  },
});

export const { setFavoritedProduct } = favoritedProductSlice.actions;

export const favoritedProductSelector = (state: RootState) =>
  state.favoritedProduct;

export const favoritedProductReducer = favoritedProductSlice.reducer;
