import { combineReducers } from 'redux';
import userReducer from './User';
import filterReducer from './Filter';

const rootReducer = combineReducers({
    userState: userReducer,
    filterState: filterReducer
});

export default rootReducer;
