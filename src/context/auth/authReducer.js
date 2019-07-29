import { REGISTER_SUCCESS, CLEAR_REGISTER } from "../types/AuthTypes";

export default (state, action) => {
  switch (action.type) {
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
