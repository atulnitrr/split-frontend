import React, { useReducer } from "react";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import {
  ADD_GROUP_SUCCESS,
  ADD_GROUP_FAILURE,
  CLEAR_ERROR,
  GET_ALL_GROUPS
} from "../types";
import axios from "axios";
import { URL } from "../../Appconst";

const UserState = props => {
  const initialState = {
    groupAdded: false,
    error: null,
    groups: [],
    loading: true
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const addGroup = async groupName => {
    try {
      const payload = { name: groupName };
      await axios.post(`${URL}/users/addgroup`, payload);
      dispatch({ type: ADD_GROUP_SUCCESS });
    } catch (error) {
      dispatch({ type: ADD_GROUP_FAILURE, payload: error.response.data });
    }
  };

  const getAllGroups = async () => {
    try {
      const res = await axios.get(`${URL}/users/groups`);
      console.log(res);
      dispatch({ type: GET_ALL_GROUPS, payload: res.data });
    } catch (error) {
      console.log(error.response);
    }
  };

  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <UserContext.Provider
      value={{
        groupAdded: state.groupAdded,
        error: state.error,
        groups: state.groups,
        loading: state.loading,
        addGroup,
        clearError,
        getAllGroups
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
