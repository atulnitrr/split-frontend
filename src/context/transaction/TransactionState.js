import React, { useReducer } from "react";
import TransactionContext from "./transactionContext";
import transactionReducer from "./transactionReducer";
import axios from "axios";
import { URL } from "../../Appconst";
import {
  RECORD_PAYMENT_SUCCESS,
  SET_CURRENT_GROUP,
  GET_ALL_USERS_OF_GROUP_SUCCESS,
  GET_ALL_USERS_OF_GROUP_FAILURE,
  RECORD_PAYMENT_FAILURE,
  CLEAR_PAYMENT
} from "../types";

const TransactionState = props => {
  const initialState = {
    loading: false,
    currentGroup: null,
    paymentDone: false,
    currentGroupUserBalance: []
  };

  const [state, dispatch] = useReducer(transactionReducer, initialState);

  const recordPayment = async (groupName, transDetail) => {
    const payload = {
      groupName,
      transDetail
    };
    try {
      const res = await axios.post(`${URL}/trans`, payload);
      console.log("payment done ");
      dispatch({ type: RECORD_PAYMENT_SUCCESS });
    } catch (error) {
      dispatch({
        type: RECORD_PAYMENT_FAILURE,
        payload: error.response.data
      });
      console.log(error.response);
    }
  };

  const getUserBalanceInGroup = async group => {
    try {
      const res = await axios.get(`${URL}/trans/${group}`);
      console.log("user -balacne");
      dispatch({ type: GET_ALL_USERS_OF_GROUP_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: GET_ALL_USERS_OF_GROUP_FAILURE,
        payload: error.response.data
      });
      console.log(error.response);
    }
  };

  const setCurrentGroup = group => {
    dispatch({ type: SET_CURRENT_GROUP, payload: group });
  };

  const clearPayment = () => {
    dispatch({ type: CLEAR_PAYMENT });
  };

  return (
    <TransactionContext.Provider
      value={{
        loading: state.loading,
        currentGroup: state.currentGroup,
        paymentDone: state.paymentDone,
        currentGroupUserBalance: state.currentGroupUserBalance,
        recordPayment,
        clearPayment,
        getUserBalanceInGroup,
        setCurrentGroup
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionState;
