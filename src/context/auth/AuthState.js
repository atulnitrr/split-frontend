import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axois from "axios";
import {
  AuthTypes,
  CLEAR_REGISTER,
  REGISTER_SUCCESS
} from "../types/AuthTypes";

const AuthState = props => {
  const initialState = {
    isRegistered: false,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const register = async user => {
    try {
      console.log(user);
      dispatch({ type: REGISTER_SUCCESS });
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
        register,
        clearRegister
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
