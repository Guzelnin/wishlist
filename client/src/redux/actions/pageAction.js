import axios from 'axios';
import { SET_MY_PAGE } from '../types';

export const setMyPage = (payload) => ({ type: SET_MY_PAGE, payload });

export const getMyPage = () => (dispatch) => {
  axios('/api/user/mypage')
    .then((data) => dispatch(setMyPage(data.data)))
    .catch(console.log);
};
