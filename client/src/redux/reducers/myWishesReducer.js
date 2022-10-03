import { ADD_WISH, GET_MY_WISHES, SET_FRIENDS_WISHES } from '../types';

export default function myWishesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MY_WISHES:
      return payload;
    case ADD_WISH:
      return [...state, payload];
    case SET_FRIENDS_WISHES:
      return payload;
    default:
      return state;
  }
}
