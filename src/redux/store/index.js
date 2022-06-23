import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import { apiSlice } from '../slices/apiSlice';

// Store -> Globalized State

// Action -> Have 2 properties, 1 for a unique identifier + 1 for a payload which has the data

// Reducer -> Manage the state + return newly updated state

// Dispatch -> Send the action to the reducer and update the store values

// Configure Store with reducers
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
