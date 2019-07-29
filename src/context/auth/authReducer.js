import {
  REGISTER_SUCCESS,
  CLEAR_REGISTER,
  LOGING_SUCCESS,
  LOGOUT,
  LOGING_FAILURE
} from "../types/AuthTypes";
import { CLEAR_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOGING_SUCCESS:
      const user = action.payload;
      localStorage.setItem("loggedinUser", user);
      return {
        ...state,
        loggedinUser: user
      };

    case LOGING_FAILURE:
    case LOGOUT:
      localStorage.removeItem("loggedinUser");
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
