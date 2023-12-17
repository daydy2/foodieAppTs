import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage, StateStorage } from "zustand/middleware";
import { instance } from "../util/request";
import { LoginData, UserData } from "../types/type";

type UserInitialState = {
  details: UserData | null;
  token: string | null;
  isLoggedIn: boolean;
};

interface UserActions {
  login: (data: LoginData) => Promise<UserData | Error>;
  register: (data: LoginData) => Promise<boolean | Error>;
  logout: () => Promise<any | Error>;
}

const initialState: UserInitialState = {
  details: null,
  token: null,
  isLoggedIn: false,
};
type UserStore = UserInitialState & UserActions & unknown;

const userSlice = create<UserStore>()(
  persist(
    (set, get) => ({
      ...initialState,
      login: async (data: LoginData): Promise<UserData | Error> => {
        try {
          const response = await instance.post("login", data);
          const token = response.data.data.token;
          const detail = response.data.data.user;
          console.log("userStore", token);
          set((state) => ({ ...state, token: token }));
          set((state) => ({ ...state, details: detail }));
          set((state) => ({ ...state, isLoggedIn: true }));
          return response.data.status;
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
      register: async (data: LoginData): Promise<boolean | Error> => {
        try {
          const response = await instance.post("register", data);
          return response.data.status;
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
      logout: async (): Promise<any | Error> => {
        try {
          const response = await instance.get("logout");
          return response;
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
    }),
    {
      name: "foodAppTs",
      storage: createJSONStorage(() => AsyncStorage as StateStorage),
    }
  )
);

export default userSlice;
