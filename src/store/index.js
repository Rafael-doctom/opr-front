import { combineReducers, createStore } from 'redux';
import exampleReducer from './reducers/exampleReducer';

const rootReducer = combineReducers({
    example: exampleReducer
});

export default createStore(rootReducer);