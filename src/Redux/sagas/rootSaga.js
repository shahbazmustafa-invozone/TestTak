// import {call, all} from 'redux-saga/effects';
// import {watchFetchMovies} from './movieSagas';

// export default function* rootSaga() {
//   yield call(watchFetchMovies);
// }
const urlGetMovies = 'https://6fd31d814425.ngrok.io/api/getMovies?page[number]=1';
import {
    FETCH_MOVIES,
    FETCH_SUCCEDED,
    FETCH_FAILED,
  } from '../action/actionTypes';
import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchMovies() { 
     let recievedMovies = yield fetch(urlGetMovies, {
        method: 'GET',
      }).then(response => response.json()); 
    let array1=JSON.parse(recievedMovies)
        console.log(array1)
        yield put({type: FETCH_SUCCEDED, recievedMovies: JSON.parse(recievedMovies)})
}
function* actionWatcher() {
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}