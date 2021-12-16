import * as ActionTypes from './ActionTypes';

export const staffs = (state = { staffs: [] }, action) => {
  switch (action.type) {
    case ActionTypes.RENDER_STAFF:
      return {
        ...state,
        staffs: action.payload,
      };

    case ActionTypes.ADD_STAFF:
      return { ...state, staffs: action.payload };

    case ActionTypes.DELETE_STAFF:
      return {
        ...state,
        staffs: action.payload,
      };

    case ActionTypes.UPDATE_STAFF:
      return {
        ...state,
        staffs: action.payload,
      };
    default:
      return state;
  }
};
