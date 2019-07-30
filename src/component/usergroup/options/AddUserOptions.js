import React from "react";

const AddUserOptions = ({ user }) => {
  return user.map(user => <option key={user.email}>{user.email}</option>);
};

export default AddUserOptions;
