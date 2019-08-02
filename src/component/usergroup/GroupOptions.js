import React, { useEffect, useContext } from "react";
import UserContext from "../../context/user/userContext";

const GroupOptions = () => {
  const userContext = useContext(UserContext);
  const { getAllGroups, groups, loading, toggleGroupAdded } = userContext;
  useEffect(() => {
    getAllGroups();
  }, [toggleGroupAdded]);

  return (
    groups.length > 0 &&
    groups.map(t => (
      <option key={t} value={t}>
        {t}
      </option>
    ))
  );
};

export default GroupOptions;
