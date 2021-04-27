import {
  FETCH_MOVIES,
  FETCH_SUCCEDED,
  FETCH_FAILED,
  ARRAY_EMPTY,
  FETCH_MOVIES_DETAIL,
  FETCH_SUCCEDED_DETAIL,
  FETCH_FAILED_DETAIL,
} from '../action/actionTypes';

export const fetchMoviesAction = () => {
  return {
    type: FETCH_MOVIES,
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
export const arrayEmptyAction = (recievedMovies = []) => {
  return {
    type: ARRAY_EMPTY,
    recievedMovies,
  };
};
export const fetchDetailMoviesAction = () => {
  return {
    type: FETCH_MOVIES_DETAIL,
  };
};
export const fetchDetailSuccessAction = recievedMovies => {
  return {
    type: FETCH_SUCCEDED_DETAIL,
    recievedMovies,
  };
};
export const fetchDetailFailedAction = error => {
  return {
    type: FETCH_FAILED_DETAIL,
    error,
  };
};

