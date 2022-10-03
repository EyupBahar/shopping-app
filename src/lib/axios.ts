import { ProductCategory } from "./../types/index";
import Axios from "axios";
import { Product } from "../types";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV5dXBiaHIyNEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vRXl1cEJhaGFyIiwiaWF0IjoxNjY0NTY2NTAyLCJleHAiOjE2NjQ5OTg1MDJ9.lejz9Ve5oE6BLGU0Tjp6ddzPr-Vd1AdVKy3gLzH34EQ";

export const axios = Axios.create({
  baseURL: "https://upayments-studycase-api.herokuapp.com/api/",
  headers: { Authorization: `Bearer ${token}` },
});