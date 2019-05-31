import { createStore, combineReducers, applyMiddleware } from "redux";
import { rootReducer } from './rootreducer';
import { movieReducer } from './containers/seating/reducer';

import thunk from 'redux-thunk';


const reducers = combineReducers({
    rootReducer: rootReducer,
    movieReducer: movieReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;