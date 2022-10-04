import axios from 'axios';
import { GET_ONE_WISH_TO_COPY } from '../types';

export const getWishToCopy = (payload) => ({ type: GET_ONE_WISH_TO_COPY, payload });

export const getWishToCopyAsync = (id) => (dispatch) => {
  axios.get(`/api/v1/wishes/copy/${id}`)
    .then((res) => dispatch(getWishToCopy(res.data)))
    .catch(console.log);
};
