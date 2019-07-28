import {
  SET_CURRENT_GROUP,
  GET_ALL_USERS_OF_GROUP_SUCCESS,
  RECORD_PAYMENT_SUCCESS,
  RECORD_PAYMENT_FAILURE,
  CLEAR_PAYMENT
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case RECORD_PAYMENT_SUCCESS:
      return {
        ...state,
        paymentDone: true
      };
    case CLEAR_PAYMENT:
      return {
        ...state,
        paymentDone: false
      };
    case RECORD_PAYMENT_FAILURE:
      return {
        ...state,
        paymentDone: false
      };
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
