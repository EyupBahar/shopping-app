import { useState } from "react";
import { CreateProductRequest } from "../types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../app/hooks";
import { createProduct } from "../store/productSlice";

export const CreateProduct = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateProductRequest>();
  const onSubmit: SubmitHandler<CreateProductRequest> = async (data) => {
    await dispatch(createProduct(data));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col  w-[400px]">
          <label htmlFor="" className="mt-2">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="border-2 border-#C7CAD0-900 rounded-lg mt-2 p-2"
          />
        </div>
        <div className="flex flex-col  w-[400px]">
          <label htmlFor="" className="mt-2">
            Price
          </label>
          <input
            type="number"
            {...register("price", { required: true })}
            className="border-2 border-#C7CAD0-900 rounded-lg mt-2 p-2"
          />
        </div>
        <div className="flex flex-col  w-[400px]">
          <label htmlFor="" className="mt-2">
            Category
          </label>
          <input
            type="text"
            {...register("category", { required: true })}
            className="border-2 border-#C7CAD0-900 rounded-lg mt-2 p-2"
          />
        </div>
        <div className="flex flex-col  w-[400px]">
          <label htmlFor="" className="mt-2">
            Description
          </label>
          <input
            type="text"
            {...register("description", { required: true })}
            className="border-2 border-#C7CAD0-900 rounded-lg mt-2 p-2"
          />
        </div>
        <div className="flex flex-col  w-[400px]">
          <label htmlFor="" className="mt-2">
            Avatar
          </label>
          <input
            type="text"
            {...register("avatar", { required: true })}
            className="border-2 border-#C7CAD0-900 rounded-lg mt-2 p-2"
          />
        </div>
        <div className="flex flex-col  w-[400px]">
          <label htmlFor="" className="mt-2">
            Developer Email{" "}
          </label>
          <input
            type="email"
            {...register("developerEmail", { required: true })}
            className="border-2 border-#C7CAD0-900 rounded-lg mt-2 p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-6 w-[400px]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
