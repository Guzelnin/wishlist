import { GET_ANOTHER_USER_WISHES } from '../types';

export default function anotherUserWishesReduser(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ANOTHER_USER_WISHES:
      return payload;
    default:
      return state;
  }
}
