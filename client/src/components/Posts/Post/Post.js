import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    width: `70%`,
    margin: theme.spacing(2)

  },
  title: {
    fontWeight: "bold",
    color: 'black',
    margin: theme.spacing(1)
  },
}));
const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
const Post = ({ match }) => {
  const classes = useStyles();
  const { postId } = match.params;
  // setup content
  const post = useSelector((state) =>
    state.posts.find(({ _id }) => _id === postId)
  );
  return (
    <Grid xs={12} fullWidth container justifyContent="center">
      <Paper className={classes.paper}>
        <Typography className={classes.title} variant="h6">
            {post ? post.title : "error"}
        </Typography>
        <hr></hr>
        <Typography variant="body1">
          {post ? post.body : "error body"}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Post;
