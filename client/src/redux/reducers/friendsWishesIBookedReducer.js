import { GET_FRIENDS_WISHES_I_BOOKED } from '../types';

export default function friendsWishesIBookedReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_FRIENDS_WISHES_I_BOOKED:
      return payload;
    default:
      return state;
  }
}
