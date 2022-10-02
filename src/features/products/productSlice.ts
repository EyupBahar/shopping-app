import { createProductRequest } from "./../../types/index";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types";
import { Axios } from "../../services/product";

interface Products {
  data: Product[];
  selectedProduct: Product;
  loading: boolean;
  error: string;
}

const initialState: Products = {
  data: [],
  selectedProduct: {} as Product,
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const response = await Axios.get<{ products: Product[] }>("/products");
  return response.data.products;
});

export const fetchProductDetails = createAsyncThunk(
  "productDetails/fetch",
  async (_id: Product["_id"]) => {
    const response = await Axios.get<{ product: Product }>(`/products/${_id}`);
    return response.data.product;
  }
);

export const createProducts = createAsyncThunk(
  "product/create",
  async (data) => {
    const response = await Axios.post<createProductRequest>("/products", data);
    return response.data;
  }
);

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
    builder.addCase(fetchProducts.rejected, (state) => {
      state.error = "An Error Accured !";
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
