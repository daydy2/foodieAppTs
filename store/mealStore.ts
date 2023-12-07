import { create } from "zustand";
import { instance } from "../util/request";
import { CategoryType, MealType } from "../types/type";

const initialState = {
  meal: null,
  categories: null,
};

const mealSlice = create((set, get) => ({
  getAllCategory: async (): Promise<CategoryType[] | Error> => {
    try {
      const response = await instance.get("/categories");
      return response.data.data;
    } catch (error: unknown) {
      if (typeof error === "string") {
        throw error;
      } else if (error instanceof Error) {
        throw error.message;
      } else {
        throw error;
      }
    }
  },
  getMealsByCategory: async (id: string): Promise<MealType[] | Error> => {
    try {
      const response = await instance.get(`/allmeals/${id}`);
      return response.data.data;
    } catch (error: unknown) {
      if (typeof error === "string") {
        throw error;
      } else if (error instanceof Error) {
        throw error.message;
      } else {
        throw error;
      }
    }
  },
  getAllMeals: async (): Promise<MealType[] | Error> => {
    try {
      const response = await instance.get("/meals/allmeals");
      return response.data.data;
    } catch (error: unknown) {
      if (typeof error === "string") {
        throw error;
      } else if (error instanceof Error) {
        throw error.message;
      } else {
        throw error;
      }
    }
  },
  getMealById: async (id: string): Promise<MealType | Error> => {
    try {
      const response = await instance.get(`/meal/${id}`);
      return response.data.data;
    } catch (error: unknown) {
      if (typeof error === "string") {
        throw error;
      } else if (error instanceof Error) {
        throw error.message;
      } else {
        throw error;
      }
    }
  },
  createNewCat: async (data: object): Promise<CategoryType | Error> => {
    try {
      const response = await instance.post("/category/create", data);
      return response.data.data;
    } catch (error: unknown) {
      if (typeof error === "string") {
        throw error;
      } else if (error instanceof Error) {
        throw error.message;
      } else {
        throw error;
      }
    }
  },
  createNewMeal: async (data: object): Promise<MealType | Error> => {
    try {
      const response = await instance.post("/meal/create", data);
      // if ("data" in response.data.data) {
      //   return response.data.data as MealType;
      // } else {
      //   throw new Error("Invalid API response");
      // }
      return response.data.data;
    } catch (error: unknown) {
      if (typeof error === "string") {
        throw error;
      } else if (error instanceof Error) {
        throw error.message;
      } else {
        throw error;
      }
    }
  },
}));

export default mealSlice;
