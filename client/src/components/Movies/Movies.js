import React from "react";
import { Grid, CircularProgress, Button, Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import Movie from "./Movie/Movie";
import useStyles from "./styles";
import { useState } from "react";

import AddIcon from "@material-ui/icons/AddCircle";

const Movies = (props) => {
  const classes = useStyles();

  const movies = useSelector((state) => state.movies);

  console.log(movies);
  return !movies.length ? (
    <CircularProgress />
  ) : (
    <Container>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {movies.map((movie) => (
          <Grid key={movie._id} item xs={12} sm={6} md={4}>
            <Movie
              movie={movie}
              setCurrentId={props.setCurrentId}
              setValue={props.setValue}
            ></Movie>
          </Grid>
        ))}
      </Grid>
      <Button
        className={classes.add}
        color="primary"
        onClick={() => props.setValue(2)}
      >
        <AddIcon />
        Add
      </Button>
    </Container>
  );
};

export default Movies;
