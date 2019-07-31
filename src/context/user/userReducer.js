import {
  ADD_GROUP_SUCCESS,
  ADD_GROUP_FAILURE,
  CLEAR_ERROR,
  GET_ALL_GROUPS,
  USER_ADDED_SUCCESS,
  USER_ADDED_FAILURE,
  GET_ALL_USERS_OF_GROUP_SUCCESS,
  GET_ALL_USERS_OF_GROUP_FAILURE,
  SET_AVAIL_USERS,
  CLEAR_ADD_GROUP_ERROR
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_GROUP_SUCCESS:
      return {
        ...state,
        groupAddedSuccess: true,
        toggleGroupAdded: !state.toggleGroupAdded
      };
    case USER_ADDED_SUCCESS:
      return {
        ...state,
        userAdded: true,
        userAddedInGroup: action.payload
      };
    case USER_ADDED_FAILURE:
    case ADD_GROUP_FAILURE:
      return {
        ...state,
        groupAddedSuccess: false,
        toggleGroupAdded: !state.toggleGroupAdded,
        addGroupError: action.payload
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
    case SET_AVAIL_USERS:
      return {
        ...state,
        availableUsers: action.payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    case CLEAR_ADD_GROUP_ERROR:
      return {
        ...state,
        addGroupError: null
      };

    default:
      return {
        ...state
      };
  }
};
