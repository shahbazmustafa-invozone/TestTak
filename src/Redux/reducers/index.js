import {combineReducers} from 'redux';
import movieReducer from '../reducers/movieReducer';
import movieDetail from "../reducers/movieDetail";
const allReducers = combineReducers({
    movieReducer,
    movieDetail
});
export default allReducers;