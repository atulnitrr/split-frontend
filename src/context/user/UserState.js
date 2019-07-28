import React, { useReducer } from "react";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import axios from "axios";
import { URL } from "../../Appconst";
import {
  ADD_GROUP_SUCCESS,
  ADD_GROUP_FAILURE,
  CLEAR_ERROR,
  GET_ALL_GROUPS,
  USER_ADDED,
  USER_ADDED_SUCCESS,
  USER_ADDED_FAILURE,
  GET_ALL_USERS_OF_GROUP_SUCCESS,
  GET_ALL_USERS_OF_GROUP_FAILURE
} from "../types";

const UserState = props => {
  const initialState = {
    groupAdded: false,
    userAdded: false,
    error: null,
    groups: [],
    currentGroupUser: [],
    loading: true
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const addUser = async (groupName, userNames) => {
    try {
      const res = axios.post(`${URL}/users/addusertogroup`, {
        groupName,
        userNames
      });
      console.log(res.data);
      dispatch({ type: USER_ADDED_SUCCESS });
    } catch (error) {
      dispatch({ type: USER_ADDED_FAILURE, payload: error.response.data });
      console.log(error.rsponse);
    }
  };

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
      dispatch({ type: GET_ALL_GROUPS, payload: res.data });
    } catch (error) {
      console.log(error.response);
    }
  };

  const getUsersOfGroup = async group => {
    try {
      const res = await axios.get(`${URL}/users/${group}`);
      dispatch({ type: GET_ALL_USERS_OF_GROUP_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: GET_ALL_USERS_OF_GROUP_FAILURE,
        payload: error.response.data
      });
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
        userAdded: state.userAdded,
        currentGroupUser: state.currentGroupUser,
        addGroup,
        clearError,
        getAllGroups,
        addUser,
        getUsersOfGroup
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
