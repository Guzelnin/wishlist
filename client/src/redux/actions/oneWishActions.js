import axios from 'axios';
import { GET_ONE_WISH } from '../types';

export const getOneWish = (payload) => ({ type: GET_ONE_WISH, payload });

export const getOneWishAsync = (id) => (dispatch) => {
  axios.get(`/api/v1/wishes/${id}`)
    .then((res) => dispatch(getOneWish(res.data)))
    .catch(console.log);
};
