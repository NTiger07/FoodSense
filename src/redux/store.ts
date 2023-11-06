import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: 'foodsense',
  storage: storage,
  whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, userReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
});

export default store

export const persistor = persistStore(store)
