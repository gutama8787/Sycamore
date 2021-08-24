
import { createSlice } from '@reduxjs/toolkit'

import { fetchPosts } from '../app/api'
import axios from 'axios'

const url = " http://localhost:5000"


const initialState = [{"tags":["Ford","BMW","Fiat"],"likeCount":0,"createdAt":"2021-08-13T18:20:54.970Z","_id":"6116b81391864a0f92f7da4a",
"title":"Lorem Ipsum is simply dummy text ","body":" It has surviions of Lorem Ipsum","file":"",
"username":"gutama","comments":[],"__v":0},{"tags":["life","bat","mat"],"likeCount":0,"createdAt":"2021-08-13T18:27:32.203Z","_id":"6116b9a62ef0f80fdfb8cc32",
"title":"The second coming  ","body":"Lorem Ipsum is simply dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookf Lorem Ipsum",
"file":"","username":"john doe","comments":[],"__v":0}]


const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    createPost(state,action) {
      state.push(action.payload)
    },
    getPosts(state,action) {
      // state.push(action.payload[0])
      action.payload.map(x => state.push(x))
    }
  }
})



const postReducer = postsSlice.reducer
// console.log(postsSlice.reducer)
export const {createPost,getPosts } = postsSlice.actions

export const allPosts =  () => async dispatch => {
  const {data} = await  axios.get(`${url}/posts`);
  console.log(data)
  dispatch(getPosts(data))
}


export default postReducer