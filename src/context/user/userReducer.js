import { ADD_GROUP_SUCCESS, ADD_GROUP_FAILURE, CLEAR_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_GROUP_SUCCESS:
      return {
        ...state,
        groupAdded: true
      };

    case ADD_GROUP_FAILURE:
      return {
        ...state,
        groupAdded: false,
        error: action.payload
      };

    case CLEAR_ERROR:
      return {
        ...state,
        groupAdded: false,
        error: null
      };

    default:
      return {
        ...state
      };
  }
};
