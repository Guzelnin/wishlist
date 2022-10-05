import { SET_MY_PAGE } from '../types';

export default function pageReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_MY_PAGE:
      return payload;
    default:
      return state;
  }
}
