import axios from 'axios';
import { ADD_FRIEND, DELETE_REQUEST, GET_FRIEND_REQUESTS } from '../types';

export const getRequests = (payload) => ({ type: GET_FRIEND_REQUESTS, payload });
export const delRequest = (payload) => ({ type: DELETE_REQUEST, payload });
export const addFriend = (payload) => ({ type: ADD_FRIEND, payload });

export const getRequestsAsync = () => (dispatch) => {
  axios.get('/api/v1/requests')
    .then((res) => dispatch(getRequests(res.data)))
    .catch(console.log);
};

export const acceptRequest = (id) => (dispatch) => {
  axios.get(`/api/v1/request/${id}`)
    .then((res) => {
      dispatch(addFriend(res.data));
      dispatch(delRequest(res.data));
    })
    .catch(console.log);
};

export const declineRequest = (id) => (dispatch) => {
  axios.delete(`/api/v1/request/${id}`)
    .then((res) => dispatch(delRequest(res.data)))
    .catch(console.log);
};
