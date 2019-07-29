import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axois from "axios";
import {
  CLEAR_REGISTER,
  REGISTER_SUCCESS,
  LOGING_SUCCESS
} from "../types/AuthTypes";

const AuthState = props => {
  const initialState = {
    isRegistered: false,
    loggedinUser: localStorage.getItem("loggedinUser"),
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const register = async user => {
    try {
      console.log(user);
      dispatch({ type: REGISTER_SUCCESS });
    } catch (error) {}
  };

  const login = async user => {
    try {
      dispatch({ type: LOGING_SUCCESS, payload: user.email });
    } catch (error) {}
  };

  const clearRegister = () => {
    dispatch({ type: CLEAR_REGISTER });
  };

  return (
    <AuthContext.Provider
      value={{
        isRegistered: state.isRegistered,
        error: state.error,
        loggedinUser: state.loggedinUser,
        register,
        clearRegister,
        login
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
