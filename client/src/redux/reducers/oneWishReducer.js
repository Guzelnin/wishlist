import { GET_ONE_WISH } from '../types';

export default function oneWishReducer(state = null, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ONE_WISH:
      return payload;
    default:
      return state;
  }
}
