import {configureStore} from '@reduxjs/toolkit'
import postReducer from '../reducers/postSlice'
import userReducer from '../reducers/userSlice'
export default configureStore({
    reducer: {
        posts: postReducer,
        users: userReducer
    }
})