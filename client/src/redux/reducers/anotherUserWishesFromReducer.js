import { GET_WISHES_FROM_ANOTHER_USER } from '../types';

export default function anotherUserWishesFromReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_WISHES_FROM_ANOTHER_USER:
      return payload;
    default:
      return state;
  }
}
