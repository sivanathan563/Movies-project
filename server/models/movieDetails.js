import Mongoose from "mongoose";

const movieSchema = Mongoose.Schema({
  movieName: String,
  description: String,
  creator: String,
  rating: {
    type: Number,
    default: 1,
  },
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  dislikes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const MovieDetails = Mongoose.model("MovieDetails", movieSchema);

export default MovieDetails;
