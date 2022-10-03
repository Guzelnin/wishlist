import axios from 'axios';
import { SET_GIFTS_TO_ME, SET_GIFTS_FROM_ME } from '../types';

export const setGiftsToMe = (payload) => ({ type: SET_GIFTS_TO_ME, payload });
export const setGiftsFromMe = (payload) => ({ type: SET_GIFTS_FROM_ME, payload });

export const setGiftsToMeAsync = () => (dispatch) => {
  axios('/api/wishes/mypage/giftstome')
  // .then((data) => console.log(data))
    .then((data) => dispatch(setGiftsToMe(data.data)))
    .catch(console.log);
};
  
export const setGiftsFromMeAsync = () => (dispatch) => {
  axios('/api/wishes/mypage/giftsfromme')
  // .then((data) => console.log(data))
    .then((data) => dispatch(setGiftsFromMe(data.data)))
    .catch(console.log);
};
