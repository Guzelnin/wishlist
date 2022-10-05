import { GET_USER, LOGOUT, SET_AUTH } from '../types';

export default function userReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_AUTH:
      return payload;
    case LOGOUT:
      return {};
    case GET_USER:
      return payload;
    default:
      return state;
  }
}
