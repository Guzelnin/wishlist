import {
  ADD_WISH, GET_MY_WISHES, UPDATE_MY_WISHES, DELETE_MY_WISH,
} from '../types';

export default function myWishesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MY_WISHES:
      return payload;
    case ADD_WISH:
      return [...state, payload];
    case UPDATE_MY_WISHES:
      return state.map((el) => (el.id === payload.id ? payload : el));
    case DELETE_MY_WISH:
      return state.filter((wish) => wish.id !== payload);
    default:
      return state;
  }
}
