// here we write the function to process requests
// from the client.
// CRUD ... creat read update delet 

import express from 'express';
import mongoose  from 'mongoose';
// import User from '../models/userSchema';
import Post from '../models/postSchema.js';

// get ... read all
// const getPosts = (req,res) => {
//     return res.send('baseic')
// }

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


// get ... read a single post
export const getPost = async (req,res) => {
    try {
        console.log(req.params)
        const {id} = req.params;
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
// post ... create

export const createPost = async (req,res) => {
    const {title, body, file, username,tags} = req.body
    const newPost = new Post({
        title,body,file,username,tags
    })
    console.log(req.body);
    // add this new post to db.
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


// delet .. delete

// update .. update


