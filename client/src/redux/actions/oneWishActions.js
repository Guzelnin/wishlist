import axios from 'axios';
import { GET_ONE_WISH, UPDATE_MY_WISHES, UPDATE_ONE_WISH } from '../types';

export const getOneWish = (payload) => ({ type: GET_ONE_WISH, payload });
export const editOneWish = (payload) => ({ type: UPDATE_ONE_WISH, payload });
export const updateMyWishes = (payload) => ({ type: UPDATE_MY_WISHES, payload });

export const getOneWishAsync = (id) => (dispatch) => {
  axios.get(`/api/v1/wishes/details/${id}`)
    .then((res) => dispatch(getOneWish(res.data)))
    .catch(console.log);
};

export const editOneWishesAsync = (inputs, id) => (dispatch) => {
  axios.patch(`/api/wishes/${id}/edit`, inputs)
    .then((res) => {
      dispatch(editOneWish(res.data));
      dispatch(updateMyWishes(res.data));
    })
    .catch(console.log);
};
