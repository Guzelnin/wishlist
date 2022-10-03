import { GET_MY_FRIEND_REQUESTS, SEND_FRIEND_REQUEST } from '../types';

export default function myFriendRequestReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MY_FRIEND_REQUESTS:
      return payload;
    case SEND_FRIEND_REQUEST:
      return [...state, payload];
    default:
      return state;
  }
}
