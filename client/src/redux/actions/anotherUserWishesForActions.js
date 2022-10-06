import axios from 'axios';
import { GET_WISHES_FOR_ANOTHER_USER } from '../types';

export const getAnotherUserWishesFor = (payload) => ({ type: GET_WISHES_FOR_ANOTHER_USER, payload });

export const getAnotherUserWishesForAsync = (id) => (dispatch) => {
  axios.get(`api/another/v1/${id}/wishesfor`)
    .then((res) => dispatch(getAnotherUserWishesFor(res.data)))
    .catch(console.log);
};
