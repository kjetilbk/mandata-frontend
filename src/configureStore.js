import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';

export default function () {
  return createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, logger)
  );
}
