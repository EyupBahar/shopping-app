import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../types";

interface ProductDetails {
  selectedProduct: Product;
  loading: boolean;
  error: string;
}

const initialState: ProductDetails = {
  selectedProduct: {
    _id: "",
    name: "",
    avatar: "",
    description: "",
    price: 0,
    category: "",
    developerEmail: "",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  },
  loading: false,
  error: "",
};

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV5dXBiaHIyNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vRXl1cEJhaGFyIiwiaWF0IjoxNjY0NTY2NTAyLCJleHAiOjE2NjQ5OTg1MDJ9.lejz9Ve5oE6BLGU0Tjp6ddzPr-Vd1AdVKy3gLzH34EQ";

export const fetchProductDetails = createAsyncThunk(
  "productDetails/fetch",
  async (_id: Product["_id"] | undefined) => {
    const response = await axios.get<{ product: Product }>(`/products/${_id}`);
    return response.data.product;
  }
);

export const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetails.pending, (state, action) => {
      state.loading = true;
      state.error = "An Error Accured !";
    });
    builder.addCase(
      fetchProductDetails.fulfilled,
      (state, action: PayloadAction<Product>) => {
        state.loading = false;
        state.selectedProduct = action.payload;
        state.error = "An Error Accured !";
      }
    );
    builder.addCase(fetchProductDetails.rejected, (state) => {
      state.error = "An Error Accured !";
      state.loading = false;
    });
  },
});

export default productDetailsSlice.reducer;
