import {
  REGISTER_SUCCESS,
  CLEAR_REGISTER,
  LOGING_SUCCESS,
  LOGOUT,
  LOGING_FAILURE,
  REGISTER_FAILURE
} from "../types/AuthTypes";
import { CLEAR_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOGING_SUCCESS:
      const user = action.payload.user;
      localStorage.setItem("loggedinUser", user);
      localStorage.setItem("s_token", action.payload.s_token);
      return {
        ...state,
        loggedinUser: user,
        s_token: action.payload.s_token
      };

    case LOGING_FAILURE:
      localStorage.removeItem("loggedinUser");
      localStorage.removeItem("s_token");
      return {
        ...state,
        loggedinUser: null,
        error: action.payload
      };
    case LOGOUT:
      localStorage.removeItem("loggedinUser");
      localStorage.removeItem("s_token");
      return {
        ...state,
        loggedinUser: null,
        error: null
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistered: true
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isRegistered: false,
        error: action.payload
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    case CLEAR_REGISTER:
      return {
        ...state,
        isRegistered: false
      };
    default:
      return {
        ...state
      };
  }
};
