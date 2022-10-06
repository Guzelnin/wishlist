import { ADD_WISHES_FROM_ME, GET_WISHES_FROM_ME } from '../types';

export default function wishesFromMeReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_WISHES_FROM_ME:
      return payload;
    case ADD_WISHES_FROM_ME:
      return [...state, payload];
    default:
      return state;
  }
}
