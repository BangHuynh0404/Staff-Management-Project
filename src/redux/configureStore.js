import { createStore, combineReducers, applyMiddleware } from 'redux';
import { staffsReducer } from './staffsReducer';
import { departmentsReducer } from './departmentReducer';
import { salaryReducer } from './salary';
import { countReducer } from './CountReducer';
import Thunk from 'redux-thunk';
import Logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: staffsReducer,
      departments: departmentsReducer,
      salary: salaryReducer,
      count: countReducer,
    }),
    applyMiddleware(Thunk, Logger)
  );
  return store;
};
