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
  GET_ALL_USERS_OF_GROUP_FAILURE,
  SET_AVAIL_USERS,
  CLEAR_ADD_GROUP_ERROR,
  CLEAR_ADD_PERSON_ERROR
} from "../types";

const UserState = props => {
  const initialState = {
    toggleGroupAdded: false,
    groupAddedSuccess: false,
    addUserSuccess: false,
    toggleAddUser: false,
    addUserError: null,
    userAddedInGroup: null,
    error: null,
    addGroupError: null,
    groups: [],
    currentGroupUser: [],
    loading: true,
    availableUsers: []
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const addUser = async (groupName, userNames) => {
    try {
      const res = axios.post(`${URL}/users/addusertogroup`, {
        groupName,
        userNames
      });
      dispatch({ type: USER_ADDED_SUCCESS, payload: groupName });
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
      dispatch({
        type: ADD_GROUP_FAILURE,
        payload: error.response.data.message
      });
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
      debugger;
      dispatch({
        type: GET_ALL_USERS_OF_GROUP_FAILURE,
        payload: error.response.data
      });
      console.log(error.response);
    }
  };

  const getAvailableUsers = async () => {
    try {
      const res = await axios.get(`${URL}/users`);
      dispatch({ type: SET_AVAIL_USERS, payload: res.data });
    } catch (error) {
      console.log(error.response);
    }
  };

  const clearError = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  const clearAddGroupError = () => {
    dispatch({ type: CLEAR_ADD_GROUP_ERROR });
  };

  const clearAddUserError = () => {
    dispatch({ type: CLEAR_ADD_PERSON_ERROR });
  };
  return (
    <UserContext.Provider
      value={{
        toggleGroupAdded: state.toggleGroupAdded,
        groupAddedSuccess: state.groupAddedSuccess,
        error: state.error,
        addGroupError: state.addGroupError,
        groups: state.groups,
        loading: state.loading,

        addUserSuccess: state.addUserSuccess,
        toggleAddUser: state.toggleAddUser,
        addUserError: state.addUserError,
        currentGroupUser: state.currentGroupUser,

        availableUsers: state.availableUsers,
        userAddedInGroup: state.userAddedInGroup,

        addGroup,
        clearError,
        getAllGroups,
        addUser,
        getUsersOfGroup,
        getAvailableUsers,
        clearAddGroupError,
        clearAddUserError
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
