import axios from 'axios';
import { GET_USER, LOGOUT, SET_AUTH } from '../types';

export const setAuthUser = (payload) => ({ type: SET_AUTH, payload });
export const logoutUser = () => ({ type: LOGOUT });
export const getUser = (payload) => ({ type: GET_USER, payload });

export const checkAuth = () => (dispatch) => {
  axios.post('/api/user/check')
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const loginUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('/api/user/login', inputs)
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const signupUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('/api/user/signup', inputs)
    .then((res) => dispatch(setAuthUser(res.data)))
    .catch(console.log);
};

export const editUser = (e, inputs) => (dispatch) => {
  e.preventDefault();
  axios.post('/api/user/edit', inputs)
    .then((res) => {
      // dispatch(logoutUser());
      dispatch(setAuthUser(res.data));
      console.log(res.data);
    })
    .catch(console.log);
};

export const logoutUserAsync = () => (dispatch) => {
  axios('/api/user/logout')
    .then(() => dispatch(logoutUser()))
    .catch(console.log);
};

// export const getUserAsync = () => (dispatch) => {
//   axios('/api/user/current')
//     .then((res) => dispatch(getUser(res.data)))
//     .catch(console.log);
// };
