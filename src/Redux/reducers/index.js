import {combineReducers} from 'redux';
import movieReducer from '../reducers/movieReducer';
const allReducers = combineReducers({
    movieReducer
});
export default allReducers;