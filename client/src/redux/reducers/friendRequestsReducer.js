import { DELETE_REQUEST, GET_FRIEND_REQUESTS } from '../types';

export default function friendRequestReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FRIEND_REQUESTS:
      return payload;
    case DELETE_REQUEST:
      return state.filter((el) => el.id !== payload.id);
    default:
      return state;
  }
}
