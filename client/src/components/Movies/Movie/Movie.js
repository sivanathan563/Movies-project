import React, { useState } from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";
import moment from "moment";
import { useDispatch } from "react-redux";

import { deleteMovie, likeMovie, dislikeMovie } from "../../../actions/movies";
import commonLogo from "../../../images/commonLogo.jfif";
import StarSharpIcon from "@material-ui/icons/StarSharp";

const Movie = ({ movie, setCurrentId, setValue }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  if (!movie.selectedFile) {
    movie.selectedFile = commonLogo;
  }
  const [add, setAdd] = useState(null);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={movie.selectedFile}
        movieName={movie.movieName}
      ></CardMedia>
      <div className={classes.overlay}>
        <Typography variant="h6">{movie.movieName}</Typography>
        <Typography variant="body2">
          {" "}
          {moment(movie.createdAt).fromNow()}{" "}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <div className={classes.overlay4}>
          {!add ? (
            <Button
              style={{ color: "white" }}
              size="small"
              onClick={() => {
                // setCurrentId(movie._id);
                setAdd(true);
              }}
            >
              <AddIcon />
            </Button>
          ) : (
            <Button style={{ color: "white" }} size="small">
              <DoneIcon />
            </Button>
          )}
        </div>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            setCurrentId(movie._id);
            setValue(2);
          }}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
        <div className={classes.overlay3}>
          <Button size="small" style={{ color: "gold" }}>
            {movie.rating} &nbsp;
            <StarSharpIcon fontSize="small" />
          </Button>
        </div>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {" "}
          {movie.tags.map((tag) => `#${tag} `)}{" "}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h6" gutterBottom>
        {" "}
        {movie.creator}{" "}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {" "}
          {movie.description}{" "}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(likeMovie(movie._id))}
        >
          <ThumbUpAltIcon fontSize="small" />
          {/* &nbsp; Like &nbsp; */}
          {movie.likeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(dislikeMovie(movie._id))}
        >
          <ThumbDownAltIcon fontSize="small" />
          {/* &nbsp; Like &nbsp; */}
          {movie.dislikeCount}
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteMovie(movie._id))}
        >
          <DeleteIcon fontSize="small" /> Delete{" "}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Movie;
