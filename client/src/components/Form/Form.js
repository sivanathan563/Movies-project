import React from "react";
import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Container,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { createMovie, updateMovie } from "../../actions/movies";
import useStyles from "./styles";

const Form = (props) => {
  const [movieData, setMovieData] = useState({
    creator: "",
    movieName: "",
    description: "",
    rating: 0,
    tags: "",
    selectedFile: "",
  });
  const movie = useSelector((state) =>
    props.currentId ? state.movies.find((m) => m._id === props.currentId) : null
  );

  useEffect(() => {
    if (movie) setMovieData(movie);
  }, [movie]);

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.currentId) {
      dispatch(updateMovie(props.currentId, movieData));
    } else {
      dispatch(createMovie(movieData));
    }
    props.setValue(0);
    clear();
  };

  const clear = () => {
    if (!props.currentId) {
      props.setValue(0);
    }
    props.setCurrentId(null);
    setMovieData({
      creator: "",
      movieName: "",
      description: "",
      rating: 0,
      tags: "",
      selectedFile: "",
    });
    // props.setIsOpen(true);
  };

  const user = JSON.parse(localStorage.getItem("profile"));

  return !user ? (
    <Typography>please login first</Typography>
  ) : user.result.role !== "manager" ? (
    <Typography varient="h5" justifyContent="center">
      Only Manager can access this page.
    </Typography>
  ) : (
    <Grid container justifyContent="center" alignItems="stretch" spacing={3}>
      <Grid item xs={10} sm={8} md={4}>
        {/* <Container component="main" maxWidth="xs"> */}
        <Paper className={classes.paper}>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <Typography variant="h6">
              {" "}
              {props.currentId ? "Editing" : "Creating"} a Movie{" "}
            </Typography>
            <TextField
              name="creator"
              variant="outlined"
              label="Creator"
              fullWidth
              value={movieData.creator}
              onChange={(e) =>
                setMovieData({ ...movieData, creator: e.target.value })
              }
            />
            <TextField
              name="movieName"
              variant="outlined"
              label="MovieName"
              fullWidth
              value={movieData.movieName}
              onChange={(e) =>
                setMovieData({ ...movieData, movieName: e.target.value })
              }
            />
            <TextField
              name="description"
              variant="outlined"
              label="Description"
              fullWidth
              multiline
              rows={3}
              value={movieData.description}
              onChange={(e) =>
                setMovieData({ ...movieData, description: e.target.value })
              }
            />
            <TextField
              name="tags"
              variant="outlined"
              label="Tags"
              fullWidth
              value={movieData.tags}
              onChange={(e) =>
                setMovieData({ ...movieData, tags: e.target.value.split(",") })
              }
            />
            <Typography variant="h6">Rating:</Typography>
            <Rating
              name="rating"
              label="Rating"
              value={movieData.rating}
              precision={0.5}
              onChange={(e, newValue) =>
                setMovieData({ ...movieData, rating: newValue })
              }
            />
            <div className={classes.fileInput}>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setMovieData({ ...movieData, selectedFile: base64 })
                }
              />
            </div>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={clear}
              fullWidth
            >
              {props.currentId ? "Clear" : "Back"}
            </Button>
            {/* <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={props.handleClose}
        >
          Cancel
        </Button> */}
          </form>
        </Paper>
        {/* </Container> */}
      </Grid>
    </Grid>
  );
};

export default Form;
