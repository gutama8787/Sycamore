import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import PostPreview from "./Post/PostPreview";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Paper, Typography } from "@material-ui/core";
export default function Posts() {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  return (
    <div className={classes.root}>
      <Grid  container spacing={5} justifyContent="center">
        <Grid backgroundColor="red" justifyContent="center" spacing={3} item xs={8}>
          <Typography variant="h3">Welcome!</Typography>
          <p>Choose an article you would like to read or write your own.</p>
        </Grid>
        {posts.map((post) => (
          <PostPreview key={post._id} state={post} />
        ))}
      </Grid>
      {/*dump*/}
    </div>
  );
}
