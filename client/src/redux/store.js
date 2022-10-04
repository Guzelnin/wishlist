import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import categoriesReducer from './reducers/categoriesReducer';
import copyWishReducer from './reducers/copyWishReduser';
import entriesReducer from './reducers/entriesReducer';
import friendRequestReducer from './reducers/friendRequestsReducer';
import friendsReducer from './reducers/friendsReducer';
import myFriendRequestReducer from './reducers/myFriendRequestsReducer';
import myWishesReducer from './reducers/myWishesReducer';
import oneWishReducer from './reducers/oneWishReducer';
import pageReducer from './reducers/pageReducer';
import userReducer from './reducers/userReducer';
import wishesReducer from './reducers/wishesReducer';
import entriesSagaWatcher from './sagas/entriesSaga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    user: userReducer,
    wishes: wishesReducer,
    categories: categoriesReducer,
    myWishes: myWishesReducer,
    friends: friendsReducer,
    friendRequests: friendRequestReducer,
    entries: entriesReducer,
    page: pageReducer,
    myRequests: myFriendRequestReducer,
    gifts: myWishesReducer,
    oneWish: oneWishReducer,
    oneWishToCopy: copyWishReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(entriesSagaWatcher);
