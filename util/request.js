import axios from "axios";

const BASE_URL = "http://10.0.2.2:3300";

const axiosConfig = {
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const instance = axios.create(axiosConfig);
