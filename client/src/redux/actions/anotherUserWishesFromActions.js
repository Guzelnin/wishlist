import axios from 'axios';
import { GET_WISHES_FROM_ANOTHER_USER } from '../types';

export const getAnotherUserWishesFrom = (payload) => ({ type: GET_WISHES_FROM_ANOTHER_USER, payload });

export const getAnotherUserWishesFromAsync = (id) => (dispatch) => {
  axios.get(`api/another/v1/${id}/wishesfrom`)
    .then((res) => dispatch(getAnotherUserWishesFrom(res.data)))
    .catch(console.log);
};
