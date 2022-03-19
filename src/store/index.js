import { combineReducers, createStore } from 'redux';
import userReducer from './reducers/userReducer';
import requirementsReducer from './reducers/requirementsReducer';

const rootReducer = combineReducers({
    user: userReducer,
    requirements: requirementsReducer
});

export default createStore(rootReducer);