import { GET_WISHES_FOR_ANOTHER_USER } from '../types';

export default function anotherUserWishesForReduser(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_WISHES_FOR_ANOTHER_USER:
      return payload;
    default:
      return state;
  }
}
