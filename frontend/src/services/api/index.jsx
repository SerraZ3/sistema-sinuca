import axios from "axios";

require("dotenv").config();
const { REACT_APP_SERVER_HOST: SERVER_HOST } = process.env;

const api = axios.create({
  baseURL: SERVER_HOST,
});

// api.interceptors.request.use(async (config) => {
//   const token = "123";

//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export default api;
