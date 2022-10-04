import { SET_USER_PAGE } from '../types';

export default function anotherPageReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_PAGE:
      return payload;
    default:
      return state;
  }
}
