import axios from 'axios';
import { SET_WISHES } from '../types';

export const setWishes = (payload) => ({ type: SET_WISHES, payload });

export const setWishesAsync = () => (dispatch) => {
  axios.post('/api/wishes/')
    .then((res) => dispatch(setWishes(res.data)))
    .catch(console.log);
};
