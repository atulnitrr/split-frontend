import React, { useReducer } from "react";
import TransactionContext from "./transactionContext";
import transactionReducer from "./transactionReducer";
import axios from "axios";
import { URL } from "../../Appconst";
import {
  RECORD_PAYMENT_SUCCESS,
  SET_CURRENT_GROUP,
  GET_ALL_USERS_OF_GROUP_SUCCESS,
  GET_ALL_USERS_OF_GROUP_FAILURE
} from "../types";
import { async } from "q";

const TransactionState = props => {
  const initialState = {
    loading: false,
    currentGroup: null,
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
      dispatch({ type: RECORD_PAYMENT_SUCCESS });
      console.log(res);
    } catch (error) {
      dispatch({
        type: RECORD_PAYMENT_SUCCESS,
        payload: error.response.transDetail
      });
      console.log(error.response);
    }
  };

  const getUserBalanceInGroup = async group => {
    try {
      const res = await axios.get(`${URL}/trans/${group}`);
      console.log(res);
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

  return (
    <TransactionContext.Provider
      value={{
        loading: state.loading,
        currentGroup: state.currentGroup,
        currentGroupUserBalance: state.currentGroupUserBalance,
        recordPayment,
        getUserBalanceInGroup,
        setCurrentGroup
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionState;
