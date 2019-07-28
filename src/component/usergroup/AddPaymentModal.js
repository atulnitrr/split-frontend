import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../context/user/userContext";
import GroupOptions from "./GroupOptions";
import UsersOptions from "./UsersOptions";

const AddPaymentModal = () => {
  const userContext = useContext(UserContext);
  const { currentGroupUser, loading, getUsersOfGroup, userAdded } = userContext;
  const [userName, setUserName] = useState("");
  const [groupName, setGroupName] = useState("");

  const onGroupSelect = e => {
    setGroupName(e.target.value);
    getUsersOfGroup(e.target.value);
  };

  return (
    <div id="add_bill" className="modal">
      <div className="modal-content">
        <div className="row">
          <h5>Record payment</h5>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              className="browser-default"
              name="group"
              value={groupName}
              onChange={onGroupSelect}
            >
              <option value="" disabled>
                Select group ..
              </option>
              <GroupOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              className="browser-default"
              name="userName"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            >
              <option value="" disabled>
                Select user ...
              </option>
              <UsersOptions
                currentGroupUser={currentGroupUser}
                loading={loading}
              />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a className="btn blue modal-close">Enter</a>
      </div>
    </div>
  );
};

export default AddPaymentModal;
