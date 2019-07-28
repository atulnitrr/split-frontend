import React, { useReducer } from "react";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import {} from "../types";

const UserState = props => {
  const initialState = {
    loading: false
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        loading: state.loading
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
