import React, { useState, useEffect, useContext } from "react";
import UserGroup from "../usergroup/UserGroup";
import Users from "../usergroup/Users";
import GroupOptions from "../../component/usergroup/GroupOptions";
import TransactionContext from "../../context/transaction/transactionContext";

const Group = () => {
  const transactionContext = useContext(TransactionContext);
  const { setCurrentGroup } = transactionContext;
  const [group, setGroup] = useState("");

  const onGroupChange = e => {
    setGroup(e.target.value);
    if (e.target.value !== "") {
      setCurrentGroup(e.target.value);
    }
  };

  return (
    <div>
      <div style={{ paddingTop: "2rem" }}>
        <select
          className="browser-default"
          name="group"
          value={group}
          onChange={onGroupChange}
        >
          <option value="" disabled>
            Select group
          </option>
          <GroupOptions />
        </select>
      </div>
      <Users />
      <UserGroup />
    </div>
  );
};

export default Group;
