import { GET_WISHES } from '../types';

export default function wishesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_WISHES:
      return payload;
    default:
      return state;
  }
}
