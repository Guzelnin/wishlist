import axios from 'axios';
import { GET_CATEGORIES } from '../types';

export const getCategories = (payload) => ({ type: GET_CATEGORIES, payload });

export const getCategoriesAsync = () => (dispatch) => {
  axios.get('/api/v1/categories')
    .then((res) => dispatch(getCategories(res.data)))
    .catch(console.log);
};
