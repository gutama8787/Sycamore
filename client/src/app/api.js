import axios from "axios";
/**
 * This file is used to make api requests to the backend. 
 * Here we'll create api to fetch user data, create user
 * also, create post, and fetch posts from the database. 
 * To achieve this we will be utilizing axios. 
 * 
 * TODO
 * [] create a get to fetch data from the db.
 *      [] users.
 *      [] posts.
 * [] create a post to save data and posts into db
 *      [] users.
 *      [] posts. 
 */

const url = " http://localhost:5000"

// ----------------- POSTS -------------- //
// get the data here.
// when page loads do dispatch(getPosts())
// import this api into the reducer and handle it there. 
// export const fetchPosts = async () => await axios.get(`${url}/posts`);

export const fetchPosts = axios.get(`${url}/posts`);
export const postPost = (newPost) => axios.post(`${url}/posts`,newPost) 
.then(function (response) {
    console.log(response);
  })