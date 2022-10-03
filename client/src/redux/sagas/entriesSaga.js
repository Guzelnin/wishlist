import {
  // eslint-disable-next-line no-unused-vars
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_ENTRIES } from '../types';
import { setEntries } from '../actions/entriesActions';

const getEntriesWithAxios = (input) => axios.post('http://localhost:3001/api/v1/entry', { input });

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* entriesSagaWorker(action) {
  try {
    yield delay(500);
    const res = yield call(getEntriesWithAxios, action.payload);
    yield put(setEntries(res.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* entriesSagaWatcher() {
  yield takeLatest(FETCH_ENTRIES, entriesSagaWorker);
}

export default entriesSagaWatcher;
