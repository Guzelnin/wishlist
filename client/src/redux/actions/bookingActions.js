import axios from 'axios';
import { ADD_USER_GIFT } from '../types';

export const addFGift = (payload) => ({ type: ADD_USER_GIFT, payload });

export const addFGiftAsync = (id, wishId) => (dispatch) => {
  axios.post(`/api/another/book/${id}/${wishId}`)
    .then((res) => dispatch(addFGift(res.data)))
    .catch(console.log);
};
