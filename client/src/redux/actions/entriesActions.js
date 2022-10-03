import axios from 'axios';
import { FETCH_ENTRIES, SET_ENTRIES } from '../types';

export const setEntries = (payload) => ({
  type: SET_ENTRIES,
  payload,
});

export const fetchEntries = (input) => ({
  type: FETCH_ENTRIES,
  payload: input,
});

export const fetchEntriesThunk = (input) => (dispatch) => {
  axios.post('http://localhost:3001/entry', { input })
    .then((res) => dispatch(setEntries(res.data)));
};
