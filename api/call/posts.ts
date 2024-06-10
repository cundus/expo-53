import api from "..";

export const getPosts = async () => {
   const response = await api.get("/posts");

   return response.data;
};
