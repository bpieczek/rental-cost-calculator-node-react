import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_URL || "https://rent-car-backend-yzto.onrender.com/api",
});

export default instance;
