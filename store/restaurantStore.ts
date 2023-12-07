import { create } from "zustand";
import { RestaurantType } from "../types/type";
import { instance } from "../util/request";

const initialState = {
  restaurant: [],
};

const restaurantSlice = create((set, get) => ({
  ...initialState,
  getAllRestaurant: async (): Promise<RestaurantType[] | Error> => {
    try {
      const response = await instance.get("/restaurants");
      set((state: any) => ({ ...state, restaurant: response.data.data }));
      return response.data.data;
    } catch (error) {
      if (typeof error === "string") {
        throw error;
      } else if (error instanceof Error) {
        throw error.message;
      } else {
        throw error;
      }
    }
  },
  getRestaurantById: async (id: string): Promise<RestaurantType | Error> => {
    try {
      const response = await instance.get(`/restaurant/${id}`);
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

export default restaurantSlice;
