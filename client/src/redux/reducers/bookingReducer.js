import { ADD_USER_GIFT } from '../types';

export default function bookingReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER_GIFT:
      return payload;
    default:
      return state;
  }
}
