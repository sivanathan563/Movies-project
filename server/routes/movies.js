import express from "express";
import {
  getMovies,
  createMovies,
  updateMovie,
  deleteMovie,
  likeMovie,
  dislikeMovie,
} from "../controllers/movies.js";
import auth from "../middleware/auth.js";

const router = express.Router();

//localhost:4000/posts

router.get("/", getMovies);
router.post("/", auth, createMovies);
router.patch("/:id", auth, updateMovie);
router.delete("/:id", auth, deleteMovie);
router.patch("/:id/likeMovie", auth, likeMovie);
router.patch("/:id/dislikeMovie", auth, dislikeMovie);

export default router;
