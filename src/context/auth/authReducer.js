import {
  REGISTER_SUCCESS,
  CLEAR_REGISTER,
  LOGING_SUCCESS
} from "../types/AuthTypes";

export default (state, action) => {
  switch (action.type) {
    case LOGING_SUCCESS:
      const user = action.payload;
      localStorage.setItem("loggedinUser", user);
      return {
        ...state,
        loggedinUser: user
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isRegistered: true
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
