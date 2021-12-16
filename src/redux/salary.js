import * as ActionTypes from './ActionTypes';

export const salary = (state = { salary: [] }, action) => {
  switch (action.type) {
    case ActionTypes.GET_SALARY:
      return {
        ...state,
        salary: action.payload,
      };

    default:
      return state;
  }
};
