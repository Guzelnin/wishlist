import axios from 'axios';
import { GET_MY_FRIEND_REQUESTS, SEND_FRIEND_REQUEST } from '../types';

export const getMyRequests = (payload) => ({ type: GET_MY_FRIEND_REQUESTS, payload });
export const sendRequest = (payload) => ({ type: SEND_FRIEND_REQUEST, payload });

export const getMyRequestsAsync = () => (dispatch) => {
  axios('/api/v1/requests/my')
    .then((res) => dispatch(getMyRequests(res.data)))
    .catch(console.log);
};

export const sendRequestAsync = (id) => (dispatch) => {
  axios(`/api/v1/requests/my/${id}`)
    .then((res) => dispatch(sendRequest(res.data)))
    .catch(console.log);
};
