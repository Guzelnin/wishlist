import axios from 'axios';
import { GET_FRIENDS } from '../types';

export const getFriends = (payload) => ({ type: GET_FRIENDS, payload });

export const getFriendsAsync = () => (dispatch) => {
  axios.get('/api/v1/friends')
    .then((res) => dispatch(getFriends(res.data)))
    .catch(console.log);
};
