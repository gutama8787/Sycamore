// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//         title: 'The duality of man', body: 'The duality of man is something i hear often.', tags: ['life','dulity'], file: ''
// }

// const postSlice = createSlice({
//     name: 'posts',
//   initialState: initialState,
//   reducers: {}
// })
// const postReducer = postSlice.reducer
// export default postReducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' }
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}
})
const postReducer = postsSlice.reducer
console.log(postsSlice.reducer)
export default postReducer