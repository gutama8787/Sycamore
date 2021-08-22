import { createSlice } from "@reduxjs/toolkit";

const initialState = [

]

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        createUser(state,action) {
            state.push(action.payload);
        }
    }
})

const userReducer = userSlice.reducer;

export const {createUser} = userSlice.actions

export default userReducer; 