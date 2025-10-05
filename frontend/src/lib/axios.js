import axios from "axios";

// Add this line to debug
console.log("Connecting to API URL:", import.meta.env.VITE_API_URL);

const BASE_URL = import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});