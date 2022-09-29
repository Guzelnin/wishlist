import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import wishesReducer from './reducers/wishesReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    wishes: wishesReducer,
  },
});
