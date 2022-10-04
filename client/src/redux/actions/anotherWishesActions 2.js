import axios from 'axios';
import {
  GET_USER_WISHES, GET_GIFTS_FOR_USER, GET_GIFTS_FROM_USER,
} from '../types';

export const setUserWishes = (payload) => ({ type: GET_USER_WISHES, payload });
export const setGiftsFromUser = (payload) => ({ type: GET_GIFTS_FROM_USER, payload });
export const setGiftsForUser = (payload) => ({ type: GET_GIFTS_FOR_USER, payload });

export const setUserWishesAsync = (id) => (dispatch) => {
  axios(`/api/another/userwishes/${id}`)
    // .then((data) => console.log(data))
    .then((data) => dispatch(setUserWishes(data.data)))
    .catch(console.log);
};
