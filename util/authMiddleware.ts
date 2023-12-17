import { AxiosRequestConfig } from "axios";
import userSlice from "../store/userStore";
import { instance } from "./request";

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
const redirectToLogin = () => {
  userSlice.getState().logout();
};

const handleUnauthorizedError = (error: any) => {
  if (error.response && error.response.status === 401) {
    redirectToLogin();
  }
};

instance.interceptors.request.use(attachAuthToken, handleUnauthorizedError);
