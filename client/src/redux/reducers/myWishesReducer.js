import { GET_MY_WISHES } from '../types';

export default function myWishesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MY_WISHES:
      return payload;
    default:
      return state;
  }
}
