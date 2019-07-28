import { SET_CURRENT_GROUP, GET_ALL_USERS_OF_GROUP_SUCCESS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_GROUP:
      return {
        ...state,
        currentGroup: action.payload
      };
    case GET_ALL_USERS_OF_GROUP_SUCCESS:
      return {
        ...state,
        currentGroupUserBalance: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
