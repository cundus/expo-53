import axios from "axios";

const api = axios.create({
   baseURL: "https://www.jsonplaceholder.org",
});

export default api;
