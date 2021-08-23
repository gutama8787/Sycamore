import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    username: "gutama",
    email: "gutama8787",
    password: "",
    conf_password: "",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser(state, action) {
      state.push(action.payload);
    },
  },
});

const userReducer = userSlice.reducer;

export const { createUser } = userSlice.actions;

export default userReducer;
