import { API_RANDOM } from '../types';

export default function apiReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case API_RANDOM:
      return payload;
    default:
      return state;
  }
}
