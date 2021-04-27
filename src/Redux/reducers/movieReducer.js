import {FETCH_FAILED, FETCH_SUCCEDED,ARRAY_EMPTY} from '../action/actionTypes';

const MovieReducer = (movies = [], action) => {
  switch (action.type) {
    case FETCH_SUCCEDED:
      return movies.concat(action.recievedMovies)
    case FETCH_FAILED:
      return {error:action.error};
      case ARRAY_EMPTY:
       return []
    default:
      return movies;
  }
};
export default MovieReducer;
