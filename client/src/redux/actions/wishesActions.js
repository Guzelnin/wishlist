import axios from 'axios';
import { GET_WISHES, SET_FRIENDS_WISHES } from '../types';

export const getWishes = (payload) => ({ type: GET_WISHES, payload });

export const getWishesAsync = () => (dispatch) => {
  axios.get('/api/wishes')
    .then((res) => dispatch(getWishes(res.data)))
    .catch(console.log);
};
