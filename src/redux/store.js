import { createStore, applyMiddleware } from 'redux';
import { todoReducer } from './reducer/addTodo.reducer';
import logger from 'redux-logger';

export const store = createStore(todoReducer, applyMiddleware(logger));
