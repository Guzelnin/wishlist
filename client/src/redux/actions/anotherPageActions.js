import axios from 'axios';
import { GET_ANOTHER_USER } from '../types';

export const getAnotherUserPage = (payload) => ({ type: GET_ANOTHER_USER, payload });

export const getAnotherUserPageAsync = (id) => (dispatch) => {
  axios(`/api/another/${id}`)
    .then((res) => dispatch(getAnotherUserPage(res.data)))
    .catch(console.log);
};
