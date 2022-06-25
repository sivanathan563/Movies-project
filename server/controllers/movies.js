import Mongoose from "mongoose";
import MovieDetails from "../models/movieDetails.js";

export const getMovies = async (req, res) => {
  try {
    const movieDetails = await MovieDetails.find();
    res.status(200).json(movieDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMovies = async (req, res) => {
  const movie = req.body;
  const newMovie = new MovieDetails(movie);

  try {
    await newMovie.save();
    res.status(200).json(newMovie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateMovie = async (req, res) => {
  const { id: _id } = req.params;
  const movie = req.body;

  if (!Mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Movie with that id");

  const updateMovie = await MovieDetails.findByIdAndUpdate(
    _id,
    { ...movie, _id },
    {
      new: true,
    }
  );
  res.json(updateMovie);
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;

  if (!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Movie with that id");

  await MovieDetails.findByIdAndRemove(id);
  res.json({ message: "Movie deleted successfully" });
};

export const likeMovie = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) return res.json({ message: "Unauthenticated" });

  if (!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Movie with that id");

  const movie = await MovieDetails.findById(id);

  const index = movie.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    movie.likes.push(req.userId);
  } else {
    movie.likes = movie.likes.filter((id) => id !== String(req.userId));
  }

  const updatedMovie = await MovieDetails.findByIdAndUpdate(id, movie, {
    new: true,
  });

  res.json(updatedMovie);
};

export const dislikeMovie = async (req, res) => {
  const { id } = req.params;

  if (!Mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Movie with that id");

  const movie = await MovieDetails.findById(id);
  const updatedMovie = await MovieDetails.findByIdAndUpdate(
    id,
    { dislikeCount: movie.dislikes + 1 },
    { new: true }
  );

  res.json(updatedMovie);
};
