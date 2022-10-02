import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './reducers/categoriesReducer';
import friendRequestReducer from './reducers/friendRequestsReducer';
import friendsReducer from './reducers/friendsReducer';
import myWishesReducer from './reducers/myWishesReducer';
import pageReducer from './reducers/pageReducer';
import userReducer from './reducers/userReducer';
import wishesReducer from './reducers/wishesReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    wishes: wishesReducer,
    categories: categoriesReducer,
    myWishes: myWishesReducer,
    friends: friendsReducer,
    friendRequests: friendRequestReducer,
    page: pageReducer,
  },
});
