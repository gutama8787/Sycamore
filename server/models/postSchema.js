import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: String,
    body: String,
    username: String, // reference to who posted it
    tags: [String],
    file: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    comments: [{ 
        body: String, 
        userName: String, 
        date: Date 
    }],
})


const Post = mongoose.model('Post',PostSchema)