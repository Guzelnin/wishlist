import axios from 'axios';
import { GET_MY_WISHES } from '../types';

export const getMyWishes = (payload) => ({ type: GET_MY_WISHES, payload });

export const getMyWishesAsync = () => (dispatch) => {
  axios.get('/api/wishes/mypage')
    .then((res) => dispatch(getMyWishes(res.data)))
    .catch(console.log);
};
