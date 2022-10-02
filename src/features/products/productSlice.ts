import { createProductRequest } from "./../../types/index";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../types";

interface Products {
  data: Product[] | null;
  loading: boolean;
  error: string;
}

const initialState: Products = {
  data: [],
  loading: false,
  error: "",
};

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV5dXBiaHIyNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vRXl1cEJhaGFyIiwiaWF0IjoxNjY0NTY2NTAyLCJleHAiOjE2NjQ5OTg1MDJ9.lejz9Ve5oE6BLGU0Tjp6ddzPr-Vd1AdVKy3gLzH34EQ";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await axios.get<{ products: Product[] }>(
    "https://upayments-studycase-api.herokuapp.com/api/products",
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return response.data.products;
});

export const fetchProductDetails = createAsyncThunk(
  "product/fetch",
  async (_id) => {
    const response = await axios.get<{ products: Product[] }>(
      `https://upayments-studycase-api.herokuapp.com/api/products/${_id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data.products;
  }
);

export const createProducts = createAsyncThunk(
  "product/create",
  async (payload) => {
    const response = await axios.post<
      createProductRequest,
      createProductRequest
    >("https://upayments-studycase-api.herokuapp.com/api/products", payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  }
);

/* state.data.push(action.payload) */

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
      state.error = "An Error Accured !";
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.error = "An Error Accured !";
        state.data = action.payload;
      }
    );
    builder.addCase(fetchProducts.rejected, (state) => {
      state.error = "An Error Accured !";
      state.loading = false;
    });
  },
});

export const getProductDetailsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetails.pending, (state, action) => {
      state.loading = true;
      state.error = "An Error Accured !";
    });
    builder.addCase(
      fetchProductDetails.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.error = "An Error Accured !";
        state.data = action.payload;
      }
    );
    builder.addCase(fetchProductDetails.rejected, (state) => {
      state.error = "An Error Accured !";
      state.loading = false;
    });
  },
});

export const createProductSlice = createSlice({
  name: "createProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
      state.error = "An Error Accured !";
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.error = "An Error Accured !";
        state.data = action.payload;
      }
    );
  },
});

export default productSlice.reducer;
