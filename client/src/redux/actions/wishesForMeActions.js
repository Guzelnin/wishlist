import axios from 'axios';
import { ADD_WISHES_FOR_ME, GET_WISHES_FOR_ME } from '../types';

export const getWishesForMe = (payload) => ({ type: GET_WISHES_FOR_ME, payload });
export const addWishesForMe = (payload) => ({ type: ADD_WISHES_FOR_ME, payload });

export const getWishesForMeAsync = () => (dispatch) => {
  axios.get('/api/wishes/v1/mypage/wishesforme')
    .then((res) => dispatch(getWishesForMe(res.data)))
    .catch(console.log);
};

export const addWishesForMeAsync = (id) => (dispatch) => {
  axios.get(`/api/wishes/v1/mypage/wishesforme/new/${id}`)
    .then((res) => dispatch(addWishesForMe(res.data)))
    .catch(console.log);
};
