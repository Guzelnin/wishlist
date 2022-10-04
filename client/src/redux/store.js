import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import anotherPageReducer from './reducers/anotherPageReducer';
import apiReducer from './reducers/apiReducer';
import categoriesReducer from './reducers/categoriesReducer';
import copyWishReducer from './reducers/copyWishReduser';
import entriesReducer from './reducers/entriesReducer';
import friendRequestReducer from './reducers/friendRequestsReducer';
import friendsReducer from './reducers/friendsReducer';
import giftsReducer from './reducers/giftsReducer';
import myFriendRequestReducer from './reducers/myFriendRequestsReducer';
import myWishesReducer from './reducers/myWishesReducer';
import oneWishReducer from './reducers/oneWishReducer';
import pageReducer from './reducers/pageReducer';
import userReducer from './reducers/userReducer';
import userWishesReducer from './reducers/userWishesReducer';
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
    gifts: giftsReducer,
    oneWish: oneWishReducer,
    oneWishToCopy: copyWishReducer,
    anotherPage: anotherPageReducer,
    anotherWishes: userWishesReducer,
    api: apiReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(entriesSagaWatcher);
