import * as ActionTypes from './ActionTypes';

export const departments = (state = { departments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DEPARTMENT:
      return {
        ...state,
        departments: action.payload,
      };

    default:
      return state;
  }
};
