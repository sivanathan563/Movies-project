import * as api from "../api/index";
import { actionTypes } from "../constants/actionTypes";

//Action creators
export const getMovies = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMovies();

    dispatch({ type: actionTypes.fetch_all, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createMovie = (movie) => async (dispatch) => {
  try {
    const { data } = await api.creatMovie(movie);
    dispatch({ type: actionTypes.create, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateMovie = (id, movie) => async (dispatch) => {
  try {
    const { data } = await api.updateMovie(id, movie);
    dispatch({ type: actionTypes.update, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    await api.deleteMovie(id);
    dispatch({ type: actionTypes.delete, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likeMovie = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeMovie(id);
    dispatch({ type: actionTypes.update, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const dislikeMovie = (id) => async (dispatch) => {
  try {
    const { data } = await api.dislikeMovie(id);
    dispatch({ type: actionTypes.update, payload: data });
  } catch (error) {
    console.log(error);
  }
};
