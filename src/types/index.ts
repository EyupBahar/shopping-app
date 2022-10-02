export type Product = {
  _id: string;
  name: string;
  avatar: string;
  description: string;
  price: number;
  category: string;
  developerEmail: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type createProductRequest = {
  name: string;
  price: number;
  category: string;
  description: string;
  avatar: string;
  developerEmail: string;
};

export type ProductCategory = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
};
