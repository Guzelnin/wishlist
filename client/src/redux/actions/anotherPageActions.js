import axios from 'axios';
import { SET_USER_PAGE } from '../types';

export const setPage = (payload) => ({ type: SET_USER_PAGE, payload });

export const getPage = (id) => (dispatch) => {
  axios(`/api/another/${id}`)
    .then((data) => dispatch(setPage(data.data)))
    .catch(console.log);
};
