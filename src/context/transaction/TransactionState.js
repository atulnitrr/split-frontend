import React, { useReducer } from "react";
import TransactionContext from "./transactionContext";
import transactionReducer from "./transactionReducer";
import axios from "axios";
import { URL } from "../../Appconst";
import { RECORD_PAYMENT_SUCCESS } from "../types";

const TransactionState = props => {
  const initialState = {
    loading: false
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

  return (
    <TransactionContext.Provider
      value={{
        loading: state.loading,
        recordPayment
      }}
    >
      {props.children}
    </TransactionContext.Provider>
  );
};

export default TransactionState;
