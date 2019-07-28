import {
  ADD_GROUP_SUCCESS,
  ADD_GROUP_FAILURE,
  CLEAR_ERROR,
  GET_ALL_GROUPS,
  USER_ADDED_SUCCESS,
  USER_ADDED_FAILURE,
  GET_ALL_USERS_OF_GROUP_SUCCESS,
  GET_ALL_USERS_OF_GROUP_FAILURE
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_GROUP_SUCCESS:
      return {
        ...state,
        groupAdded: true
      };
    case USER_ADDED_SUCCESS:
      return {
        ...state,
        userAdded: true
      };
    case USER_ADDED_FAILURE:
    case ADD_GROUP_FAILURE:
      return {
        ...state,
        groupAdded: false,
        userAdded: false,
        error: action.payload
      };
    case GET_ALL_GROUPS:
      return {
        ...state,
        loading: false,
        groups: action.payload
      };
    case GET_ALL_USERS_OF_GROUP_SUCCESS:
      return {
        ...state,
        currentGroupUser: action.payload,
        loading: false
      };
    case GET_ALL_USERS_OF_GROUP_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case CLEAR_ERROR:
      return {
        ...state,
        groupAdded: false,
        userAdded: false,
        error: null
      };

    default:
      return {
        ...state
      };
  }
};
