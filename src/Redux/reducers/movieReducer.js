import {FETCH_FAILED, FETCH_MOVIES, FETCH_SUCCEDED} from '../action/index';

const MovieReducer = (movies = [], action) => {
  switch (action.type) {
    case FETCH_SUCCEDED:
        console.log(action.recievedMovies)
    //   return action.recievedMovies;
    case FETCH_FAILED:
      return [];
    default:
      return movies;
  }
};
export default MovieReducer;
