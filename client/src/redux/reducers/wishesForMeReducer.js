import { ADD_WISHES_FOR_ME, GET_WISHES_FOR_ME } from '../types';

export default function wishesForMeReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_WISHES_FOR_ME:
      return payload;
    case ADD_WISHES_FOR_ME:
      return [...state, payload];
    default:
      return state;
  }
}
