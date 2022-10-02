import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Axios } from "../../services/product";
import { Product, ProductCategory } from "../../types";

interface ProductCategoris {
  categories: ProductCategory[];
  loading: boolean;
  error: string;
}

const initialState: ProductCategoris = {
  categories: [],
  loading: false,
  error: "",
};

export const fetchCategories = createAsyncThunk(
  "productCategories/fetch",
  async () => {
    const response = await Axios.get<{ categories: ProductCategory[] }>(
      `/categories`
    );
    console.log("kategori", response.data);
    return response.data;
  }
);

/* export const fetchProductCategory = createAsyncThunk(
  "productCategories/fetch",
  async (_id: Product["_id"]) => {
    const response = await Axios.get<{ product: Product }>(`/category/${_id}`);
    return response;
  }
); */

export const productCategoriesSlice = createSlice({
  name: "productCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.loading = true;
      state.error = "An Error Accured !";
    });
    builder.addCase(
      fetchCategories.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = "An Error Accured !";
        state.categories = action.payload;
        console.log(action.payload, "action payload verisi");
      }
    );
    builder.addCase(fetchCategories.rejected, (state) => {
      state.error = "An Error Accured !";
      state.loading = false;
    });
  },
});

export const productCategorySlice = createSlice({
  name: "productCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.loading = true;
      state.error = "An Error Accured !";
    });
    builder.addCase(
      fetchCategories.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = "An Error Accured !";
        state.categories = action.payload;
        console.log(action.payload);
      }
    );
    builder.addCase(fetchCategories.rejected, (state) => {
      state.error = "An Error Accured !";
      state.loading = false;
    });
  },
});

export default productCategoriesSlice.reducer;
