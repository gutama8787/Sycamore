import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

///// persist addition.
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

////////

import postReducer from "../reducers/postSlice";
import userReducer from "../reducers/userSlice";

const appReducer = combineReducers({
  // Define a top-level state field named `posts`, handled by `postReducer`
  posts: postReducer,
  users: userReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "posts/clearAllPosts") {
    // for all keys defined in your persistConfig(s)
    storage.removeItem("persist:root");
    // storage.removeItem('persist:otherKey')

    return appReducer([], action);
  }
  return appReducer(state, action);
};
// export default configureStore({
//     reducer: {
//         posts: postReducer,
//         users: userReducer
//     }
// })

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

export default store;
