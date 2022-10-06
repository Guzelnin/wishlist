import axios from 'axios';
import { GET_ANOTHER_USER_WISHES } from '../types';

export const getAnotherUserWishes = (payload) => ({ type: GET_ANOTHER_USER_WISHES, payload });

export const getAnotherUserWishesAsync = (id) => (dispatch) => {
  axios.get(`api/another/v1/${id}`)
    .then((res) => dispatch(getAnotherUserWishes(res.data)))
    .catch(console.log);
};
