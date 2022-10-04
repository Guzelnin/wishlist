import axios from 'axios';
import { API_RANDOM } from '../types';

export const getApi = (payload) => ({ type: API_RANDOM, payload });

export const getApiAsync = (id) => (dispatch) => {
  axios.get(`/api/v1//wishes/api/${id}`)
    .then((res) => dispatch(getApi(res.data)))
    .catch(console.log);
};
