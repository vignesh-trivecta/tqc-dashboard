import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pageSliceReducer from "./pageSlice"; // Import the slice reducer
import multiSelectSliceReducer from "./multiSelectSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['page']
}

const rootReducer = combineReducers({
  page: pageSliceReducer,
  multiSelect: multiSelectSliceReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store);
