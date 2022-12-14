import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { axios } from "../lib/axios";
import { ProductCategory } from "../types";

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
    const response = await axios.get<{ categories: ProductCategory[] }>(
      `/categories`
    );
    return response.data;
  }
);


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
        state.categories = action.payload.categories;
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
      }
    );
    builder.addCase(fetchCategories.rejected, (state) => {
      state.error = "An Error Accured !";
      state.loading = false;
    });
  },
});

export default productCategoriesSlice.reducer;
