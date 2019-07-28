import React, { useContext, useEffect } from "react";
import UserContext from "../../context/user/userContext";
import PropTypes from "prop-types";

const UsersOptions = ({ currentGroupUser, loading }) => {
  return (
    !loading &&
    currentGroupUser.length > 0 &&
    currentGroupUser.map(u => (
      <option key={u} value={u}>
        {" "}
        {u}
      </option>
    ))
  );
};

UsersOptions.propTypes = {
  group: PropTypes.string.isRequired
};

export default UsersOptions;
