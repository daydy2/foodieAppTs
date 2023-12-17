import { BASE_URL } from "@env";
import axios from "axios";
import userSlice from "../store/userStore";



const axiosConfig = {
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const instance = axios.create(axiosConfig);

const attachAuthToken = (config: any) => {
  const token = userSlice.getState().token;
  if (token) {
    console.log("attachAuthToken", token);
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
};
instance.interceptors.request.use(attachAuthToken);


