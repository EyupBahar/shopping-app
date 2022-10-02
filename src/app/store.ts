import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productSlice from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
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
