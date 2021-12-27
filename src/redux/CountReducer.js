import * as ActionTypes from './ActionTypes';

export const countReducer = (state = { count: 0 }, action) => {
  console.log(action);
  switch (action.type) {
    case 'COUNT':
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};
