import axios from 'axios';
import { ADD_WISH, GET_MY_WISHES } from '../types';

export const getMyWishes = (payload) => ({ type: GET_MY_WISHES, payload });
export const addWish = (payload) => ({ type: ADD_WISH, payload });

export const getMyWishesAsync = () => (dispatch) => {
  axios.get('/api/wishes/mypage')
    .then((res) => dispatch(getMyWishes(res.data)))
    .catch(console.log);
};

export const addWishAsync = (input) => (dispatch) => {
  axios.post('/api/wishes/add', input)
    .then((res) => dispatch(addWish(res.data)))
    .catch(console.log);
};
