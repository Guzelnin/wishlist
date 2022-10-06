import axios from 'axios';
import {
  ADD_WISH, GET_MY_WISHES, SET_FRIENDS_WISHES, DELETE_MY_WISH,
} from '../types';

export const getMyWishes = (payload) => ({ type: GET_MY_WISHES, payload });
export const addWish = (payload) => ({ type: ADD_WISH, payload });
export const setFriendsWishes = (payload) => ({ type: SET_FRIENDS_WISHES, payload });
export const deleteMyWishes = (payload) => ({ type: DELETE_MY_WISH, payload });

export const getMyWishesAsync = () => (dispatch) => {
  axios.get('/api/wishes/mypage/mywishes')
    .then((res) => console.log(res))
    // .then((res) => dispatch(getMyWishes(res.data)))
    .catch(console.log);
};

export const addWishAsync = (input) => (dispatch) => {
  axios.post('/api/wishes/add', input)
    .then((res) => dispatch(addWish(res.data)))
    .catch(console.log);
};

export const addCopyWishAsync = (input, id) => (dispatch) => {
  axios.post(`/api/wishes/add/copy/${id}`, input)
    .then((res) => dispatch(addWish(res.data)))
    .catch(console.log);
};

export const setFriendsWishesAsync = () => (dispatch) => {
  axios('/api/wishes/mypage/friendswishes')
    // .then((data) => console.log(data))
    .then((data) => dispatch(setFriendsWishes(data.data)))
    .catch(console.log);
};

export const deleteMyWishesAsync = (id) => (dispatch) => {
  axios.delete(`/api/wishes/${id}`)
    .then(() => dispatch(deleteMyWishes(id)))
    .catch(console.log);
};
