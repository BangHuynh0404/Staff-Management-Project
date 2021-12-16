import { createStore, combineReducers, applyMiddleware } from 'redux';
import { staffs } from './staffs';
import { departments } from './department';
import { salary } from './salary';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: staffs,
      departments: departments,
      salary: salary,
    }),
    applyMiddleware(Thunk, Logger)
  );
  return store;
};
