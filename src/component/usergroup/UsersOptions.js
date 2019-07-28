import React, { useContext, useEffect } from "react";
import UserContext from "../../context/user/userContext";
import PropTypes from "prop-types";

const UsersOptions = ({ groupName }) => {
  const userContext = useContext(UserContext);
  const { currentGroupUser, loading, getUsersOfGroup, userAdded } = userContext;

  useEffect(() => {
    if (groupName !== "") {
      getUsersOfGroup(groupName);
    }
  }, [userAdded]);

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

// UsersOptions.propTypes = {
//   group: PropTypes.string.isRequired
// };

export default UsersOptions;
