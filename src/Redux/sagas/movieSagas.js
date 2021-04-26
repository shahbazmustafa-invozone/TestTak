import {
  FETCH_MOVIES,
  FETCH_SUCCEDED,
  FETCH_FAILED,
} from '../action/actionTypes';

import {put, takeLatest} from 'redux-saga/effects';
import {Api} from './Api';

function* fetchMovies() {
  try {
    const recievedMovies = Api.getMoviesFromApi();
    console.log('watchFetchMovies called',recievedMovies);
    yield put({type: FETCH_SUCCEDED, recievedMovies: recievedMovies});
  } catch (error) {
      console.log(error)
    yield put({type: FETCH_FAILED, error});
  }
}
export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMovies);
}
