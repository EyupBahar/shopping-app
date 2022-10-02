import axios from "axios";
import { createProductRequest, Product } from "../types";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV5dXBiaHIyNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vRXl1cEJhaGFyIiwiaWF0IjoxNjY0NTY2NTAyLCJleHAiOjE2NjQ5OTg1MDJ9.lejz9Ve5oE6BLGU0Tjp6ddzPr-Vd1AdVKy3gLzH34EQ";

export const Axios = axios.create({
  baseURL: "https://upayments-studycase-api.herokuapp.com/api/",
  headers: { Authorization: `Bearer ${token}` },
});

const createNewProduct = async (data: createProductRequest) => {
  const response = await Axios.post<createProductRequest>("/products", data);
  return response.data;
};

const getProducts = async () => {
  const response = await Axios.get<{ products: Product[] }>("/products");
  return response.data.products;
};

const getProductDetails = async (id: Product["_id"]) => {
  const response = await Axios.get<{ products: Product[] }>(`/products/${id}`);
  return response.data.products;
};

const getProductCategories = async () => {
  const response = await Axios.get<{ products: Product[] }>(`/categories`);
  return response.data.products;
};

interface ProductService {
  getProducts: typeof getProducts;
  createNewProduct: typeof createNewProduct;
  getProductDetails: typeof getProductDetails;
  getProductCategories: typeof getProductCategories;
}

export const productService: ProductService = {
  getProducts,
  createNewProduct,
  getProductDetails,
  getProductCategories,
};
