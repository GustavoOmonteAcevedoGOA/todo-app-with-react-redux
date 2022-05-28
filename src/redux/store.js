import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { addTodo } from './action/addTodo.action';
export const store = createStore(addTodo, applyMiddleware(logger));
