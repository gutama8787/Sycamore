import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useState} from 'react';
import useStyles from './styles';
import {useDispatch} from 'react-redux'
import { createPost } from '../../../reducers/postSlice';
import { nanoid } from '@reduxjs/toolkit';
import {useHistory} from 'react-router-dom';
import { postPost } from '../../../app/api';
// redux
// import useDispatch. - when submit happens we dispatch to store.



const Ask = ()=> {
    const classes = useStyles();
    let history = useHistory();

    const intialState = {
        title: '', body: '', tags: '', file: '' };
    let store_post = {
      id: '', title: '', body: '', tags: '', file: '' };
    const [post, setPost] = useState(intialState);
    const [sub, setSub] = useState(false);

    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        console.log("................")
        console.log(post)
        const newPost = {
          id: nanoid(),
          title: post.title,
          body: post.body
        };
        // createPost is the action. 
        // newPOst is the payload. 
        const sp = {...newPost,_id:nanoid()}
        dispatch(createPost(sp));
        postPost(newPost)
        setSub(true)
        history.push("/")
    };
    return (
        <Paper className={classes.paper}>
        <form action="/" autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit = {(e)=>handleSubmit(e)}>
          <Typography variant="h6">Write your queston</Typography>
          <TextField name="title" variant="outlined" label="Title" fullWidth onChange= {(e) => setPost({...post,title:e.target.value}) } />
          <TextField name="body" variant="outlined" label="body" fullWidth multiline rows={4} onChange={(e) => setPost({...post,body:e.target.value})}  />
          <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth onChange={(e) => setPost({...post, tags: e.target.value.split(',')})} />
          <div className={classes.fileInput}><FileBase type="file" multiple={false}  /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" >
            Submit </Button>
        </form>
        {sub?(<p style={{color:"red"}}>{`${post.title} is submitted`}</p>):("")}
      </Paper>
    );
}

export default Ask