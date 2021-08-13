import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import PostPreview from './Post/PostPreview';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

import { useSelector } from 'react-redux';
import { Paper, Typography } from '@material-ui/core';
export default function Posts() {
  const classes = useStyles();
  const posts = useSelector(state => state.posts)

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        {posts.map(post=>(<PostPreview state={post}/>))}
      </Grid>
    </div>
  );
}
