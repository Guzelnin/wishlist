import axios from 'axios';
import { GET_FRIENDS_WISHES_I_BOOKED } from '../types';

export const getfriendsWishesIbooked = (payload) => ({ type: GET_FRIENDS_WISHES_I_BOOKED, payload });

export const getFriendsWishesIbookedAsync = () => (dispatch) => {
  axios('/api/wishes/v1/mypage/friendswishesibooked')
    .then((res) => dispatch(getfriendsWishesIbooked(res.data)))
    .catch(console.log);
};
