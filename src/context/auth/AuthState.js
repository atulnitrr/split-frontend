import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axois from "axios";
import {
  CLEAR_REGISTER,
  REGISTER_SUCCESS,
  LOGING_SUCCESS,
  LOGOUT
} from "../types/AuthTypes";
import { CLEAR_ERROR } from "../types";

const AuthState = props => {
  const initialState = {
    isRegistered: false,
    loggedinUser: localStorage.getItem("loggedinUser"),
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const register = async user => {
    try {
      dispatch({ type: REGISTER_SUCCESS });
    } catch (error) {}
  };

  const login = async user => {
    try {
      dispatch({ type: LOGING_SUCCESS, payload: user.email.split("@")[0] });
    } catch (error) {}
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  const clearRegister = () => {
    dispatch({ type: CLEAR_REGISTER });
  };

  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <AuthContext.Provider
      value={{
        isRegistered: state.isRegistered,
        error: state.error,
        loggedinUser: state.loggedinUser,
        register,
        clearRegister,
        login,
        logout,
        clearError
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
