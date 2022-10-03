import { CreateProductRequest, ProductCategory } from "../types/index";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types";
import { axios } from "../lib/axios";

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

export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (id?: ProductCategory["_id"]) => {
    let response;
    if (!id) {
      response = await axios.get<{ products: Product[] }>("/products");
    } else {
      response = await axios.get<{ products: Product[] }>(`/products/${id}`);
    }

    return response.data.products;
  }
);

export const fetchProductDetails = createAsyncThunk(
  "productDetails/fetch",
  async (_id: Product["_id"]) => {
    const response = await axios.get<{ product: Product }>(`/products/${_id}`);
    return response.data.product;
  }
);

export const createProduct = createAsyncThunk<Product, CreateProductRequest>(
  "product/create",
  async (data: CreateProductRequest) => {
    const response = await axios.post<CreateProductRequest, { data: Product }>(
      "/products",
      data
    );
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
      state.error = "Pending !";
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
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
      state.error = "Pending !";
    });
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
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
