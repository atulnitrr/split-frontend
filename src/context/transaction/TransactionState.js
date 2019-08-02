import React, { useReducer } from "react";
import TransactionContext from "./transactionContext";
import transactionReducer from "./transactionReducer";
import axios from "axios";
import { URL } from "../../Appconst";
import {
  RECORD_PAYMENT_SUCCESS,
  SET_CURRENT_GROUP,
  RECORD_PAYMENT_FAILURE,
  CLEAR_PAYMENT,
  CLEAR_PAYMENT_ERROR,
  GET_GROUP_BALANCE_SUCCESS,
  GET_GROUP_BALANCE_FAILURE
} from "../types";

const TransactionState = props => {
  const initialState = {
    loading: false,
    currentGroup: null,
    paymentDone: false,
    togglePayment: false,
    paymentSuccessFull: false,
    paymentError: null,
    currentGroupUserBalance: [],
    participantUsers: []
  };

  const [state, dispatch] = useReducer(transactionReducer, initialState);

  const recordPayment = async (groupName, transDetail) => {
    const payload = {
      groupName,
      transDetail
    };
    try {
      const res = await axios.post(`${URL}/trans`, payload);
      dispatch({ type: RECORD_PAYMENT_SUCCESS });
    } catch (error) {
      dispatch({
        type: RECORD_PAYMENT_FAILURE,
        payload: error.response.data.message
      });
    }
  };

  const getUserBalanceInGroup = async group => {
    try {
      const res = await axios.get(`${URL}/trans/group_txn_details/${group}`);
      const participantUsers = [
        ...res.data.map(u => u.paidBy),
        ...res.data.map(u => u.paidTo)
      ];

      const distUser = participantUsers.reduce(
        (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
        []
      );

      dispatch({
        type: GET_GROUP_BALANCE_SUCCESS,
        payload: { details: res.data, participantUsers: distUser }
      });
    } catch (error) {
      dispatch({
        type: GET_GROUP_BALANCE_FAILURE,
        payload: error.response.data
      });
    }
  };

  const setCurrentGroup = group => {
    dispatch({ type: SET_CURRENT_GROUP, payload: group });
  };

  const clearPaymentError = () => {
    dispatch({ type: CLEAR_PAYMENT_ERROR });
  };

  return (
    <TransactionContext.Provider
      value={{
        loading: state.loading,
        togglePayment: state.togglePayment,
        paymentSuccessFull: state.paymentSuccessFull,
        paymentError: state.paymentError,
        currentGroup: state.currentGroup,
        paymentDone: state.paymentDone,
        currentGroupUserBalance: state.currentGroupUserBalance,
        participantUsers: state.participantUsers,
        recordPayment,
        getUserBalanceInGroup,
        setCurrentGroup,
        clearPaymentError
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionState;
