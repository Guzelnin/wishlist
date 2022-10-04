import {
  ADD_WISH, GET_MY_WISHES, SET_FRIENDS_WISHES, UPDATE_MY_WISHES,
} from '../types';

export default function myWishesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MY_WISHES:
      return payload;
    case ADD_WISH:
      return [...state, payload];
    case SET_FRIENDS_WISHES:
      return payload;
    case UPDATE_MY_WISHES:
      return state.map((el) => (el.id === payload.id ? payload : el));
    default:
      return state;
  }
}
