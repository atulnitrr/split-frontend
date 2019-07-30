import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import axois from "axios";
import {
  CLEAR_REGISTER,
  REGISTER_SUCCESS,
  LOGING_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  LOGING_FAILURE
} from "../types/AuthTypes";
import { URL, TOKEN } from "../../Appconst";
import { CLEAR_ERROR } from "../types";

const AuthState = props => {
  const initialState = {
    isRegistered: false,
    loggedinUser: localStorage.getItem("loggedinUser"),
    error: null,
    s_token: localStorage.getItem("s_token")
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const register = async user => {
    try {
      const res = await axois.post(`${URL}/users`, {
        ...user,
        name: user.email.split("@")[0]
      });
      dispatch({ type: REGISTER_SUCCESS });
    } catch (error) {
      dispatch({
        type: REGISTER_FAILURE,
        payload: error.response.data.message
      });
    }
  };

  const login = async user => {
    try {
      const res = await axois.post(`${URL}/users/login`, user);
      console.log(res);
      let payload = {
        user: user.email.split("@")[0],
        s_token: res.headers.authorization
      };
      dispatch({ type: LOGING_SUCCESS, payload: payload });
    } catch (error) {
      let errorMessage = "";
      if (error.response.status === 403) {
        errorMessage = "Invalid credentials";
      } else {
        errorMessage = error.response.data;
      }
      dispatch({ type: LOGING_FAILURE, payload: errorMessage });
    }
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
        s_token: state.s_token,
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
