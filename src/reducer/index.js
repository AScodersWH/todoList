import { combineReducers } from 'redux';
import add from './addList';

const reducers = combineReducers({ todoList: add });

export default reducers;
