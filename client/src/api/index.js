import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:4000" });

Api.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const fetchMovies = () => Api.get("/movies");
export const creatMovie = (newMovie) => Api.post("/movies", newMovie);
export const updateMovie = (id, updateMovie) =>
  Api.patch(`/movies/${id}`, updateMovie);
export const deleteMovie = (id) => Api.delete(`/movies/${id}`);
export const likeMovie = (id) => Api.patch(`/movies/${id}/likeMovie`);
export const dislikeMovie = (id) => Api.patch(`/movies/${id}/dislikeMovie`);

export const signIn = (formData) => Api.post("/user/signin", formData);
export const signUp = (formData) => Api.post("/user/signup", formData);
