import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import PostPreview from './Post/PostPreview';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@material-ui/core';
export default function Posts() {
  const classes = useStyles();
  const posts = useSelector(state => state.posts)
 const [dump, setdump] = useState('')
  // make an api call
 

  useEffect(()=>{
    axios.get('http://localhost:5000/posts').then(response => {
      setdump(response.data[0].body);
      console.log(response.data)
    })
  })
  console.log(posts)
  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="center">
        
          {posts.map(post=>(<PostPreview key={post._id} state={post}/>))}
      </Grid>
      {dump}
    </div>
  );
}
