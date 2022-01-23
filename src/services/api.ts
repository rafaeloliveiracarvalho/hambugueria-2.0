import axios from "axios";

export const api = axios.create({
  baseURL: "https://hamburgueria-2-backend.herokuapp.com",
});
