import { ADD_FRIEND, GET_FRIENDS } from '../types';

export default function friendsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FRIENDS:
      return payload;
    case ADD_FRIEND:
      return [...state, payload];
    default:
      return state;
  }
}
