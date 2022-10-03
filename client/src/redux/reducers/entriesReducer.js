import { SET_ENTRIES } from '../types';

export default function entriesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ENTRIES:
      return payload;
    default:
      return state;
  }
}
