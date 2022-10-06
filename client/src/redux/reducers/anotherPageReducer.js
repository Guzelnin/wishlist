import { GET_ANOTHER_USER, SET_USER_PAGE } from '../types';

export default function anotherPageReducer(state = null, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ANOTHER_USER:
      return payload;
    default:
      return state;
  }
}
