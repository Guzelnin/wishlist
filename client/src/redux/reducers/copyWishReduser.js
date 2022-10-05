import { GET_ONE_WISH_TO_COPY } from '../types';

export default function copyWishReducer(state = null, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ONE_WISH_TO_COPY:
      return payload;
    default:
      return state;
  }
}
