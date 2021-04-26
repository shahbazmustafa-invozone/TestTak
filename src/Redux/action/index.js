import {
  FETCH_MOVIES,
  FETCH_SUCCEDED,
  FETCH_FAILED,
} from '../action/actionTypes';

export const fetchMoviesAction = () => {
  return {
    type: FETCH_MOVIES
  };
};
export const fetchSuccessAction = recievedMovies => {
  return {
    type: FETCH_SUCCEDED,
    recievedMovies,
  };
};
export const fetchFailedAction = error => {
  return {
    type: FETCH_FAILED,
    error,
  };
};
