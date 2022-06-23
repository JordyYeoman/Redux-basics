import { combineReducers } from 'redux';
import { apiSlice } from './slices/apiSlice';
import counterReducer from './slices/counterSlice';
import userReducer from './slices/userSlice';

export default combineReducers({
  counter: counterReducer,
  user: userReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
