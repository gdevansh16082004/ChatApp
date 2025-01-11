import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://chatapp-backend-7b4c.onrender.com/api",
    withCredentials: true,
});
