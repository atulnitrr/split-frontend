import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/user/userContext";

const GroupOptions = () => {
  const userContext = useContext(UserContext);
  const { getAllGroups, groups, loading } = userContext;
  useEffect(() => {
    getAllGroups();
  }, []);

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
