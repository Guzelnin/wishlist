import axios from 'axios';
import { ADD_WISHES_FROM_ME, GET_WISHES_FROM_ME } from '../types';

export const getWishesFromMe = (payload) => ({ type: GET_WISHES_FROM_ME, payload });

export const getWishesFromMeAsync = () => (dispatch) => {
  axios.get('/api/wishes/v1/mypage/wishesfromme')
    .then((res) => dispatch(getWishesFromMe(res.data)))
    .catch(console.log);
};

export const addWishesFromMe = (payload) => ({ type: ADD_WISHES_FROM_ME, payload });

export const addWishesFromMeAsync = (id) => (dispatch) => {
  axios.get(`/api/wishes/v1/mypage/wishesfromme/new/${id}`)
    .then((res) => {
      dispatch(getWishesFromMe(res.data)); 
    })
    .catch(console.log);
};
