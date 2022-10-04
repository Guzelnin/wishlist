import {
  GET_USER_WISHES, GET_GIFTS_FOR_USER, GET_GIFTS_FROM_USER,
} from '../types';
    
export default function userWishesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_WISHES:
      return payload;
    case GET_GIFTS_FOR_USER:
      return payload;
    case GET_GIFTS_FROM_USER:
      return payload;
    default:
      return state;
  }
}
