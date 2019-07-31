import {
  SET_CURRENT_GROUP,
  GET_ALL_USERS_OF_GROUP_SUCCESS,
  RECORD_PAYMENT_SUCCESS,
  RECORD_PAYMENT_FAILURE,
  CLEAR_PAYMENT_ERROR,
  GET_GROUP_BALANCE_SUCCESS,
  GET_ALL_USERS_OF_GROUP_FAILURE
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case RECORD_PAYMENT_SUCCESS:
      return {
        ...state,
        togglePayment: !state.togglePayment,
        paymentSuccessFull: true
      };
    case RECORD_PAYMENT_FAILURE:
      return {
        ...state,
        togglePayment: !state.togglePayment,
        paymentSuccessFull: false,
        paymentError: action.payload
      };
    case CLEAR_PAYMENT_ERROR:
      return {
        ...state,
        paymentError: null
      };
    case SET_CURRENT_GROUP:
      return {
        ...state,
        currentGroup: action.payload
      };
    case GET_GROUP_BALANCE_SUCCESS:
      return {
        ...state,
        currentGroupUserBalance: action.payload
      };
    case GET_ALL_USERS_OF_GROUP_FAILURE:
      return {
        ...state,
        paymentError: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
