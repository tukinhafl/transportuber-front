import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-capstone-q3.herokuapp.com/",
});

export default api;
