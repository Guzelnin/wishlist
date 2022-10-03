import {
  ADD_WISH, GET_MY_WISHES, SET_FRIENDS_WISHES, SET_GIFTS_TO_ME, SET_GIFTS_FROM_ME,
} from '../types';
  
export default function myWishesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_GIFTS_TO_ME:
      return payload;
    case SET_GIFTS_FROM_ME:
      return payload;
    default:
      return state;
  }
}
