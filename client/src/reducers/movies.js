import { actionTypes } from "../constants/actionTypes";

export default (movies = [], action) => {
  switch (action.type) {
    case actionTypes.fetch_all:
      return action.payload;
    case actionTypes.create:
      return [...movies, action.payload];
    case actionTypes.update:
      return movies.map((movie) =>
        movie._id === action.payload._id ? action.payload : movie
      );
    case actionTypes.delete:
      return movies.filter((movie) => movie._id !== action.payload);
    default:
      return movies;
  }
};
