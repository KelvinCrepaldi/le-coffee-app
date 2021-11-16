import axios from "axios";

const api = axios.create({
  baseURL: "https://le-coffe-api.herokuapp.com/",
});

export default api;
