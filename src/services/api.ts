import axios from "axios";

const api = axios.create({
  baseURL: "https://grochavieira-happy-backend.herokuapp.com",
});

export default api;
