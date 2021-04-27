import {FETCH_SUCCEDED_DETAIL, FETCH_FAILED_DETAIL} from '../action/actionTypes';

const MovieDetail = (movie = [], action) => {
  switch (action.type) {
    case FETCH_SUCCEDED_DETAIL:
      return action.recievedMovies
    case FETCH_FAILED_DETAIL:
      return {error:action.error};
    default:
      return movie;
  }
};
export default MovieDetail;
