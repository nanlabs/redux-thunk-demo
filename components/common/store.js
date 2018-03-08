import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import peopleReducer from '../people/peopleReducer';
import loadingReducer from './loadingReducer';

const reducers = combineReducers({
  people: peopleReducer,
  loading: loadingReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);

export default store;
