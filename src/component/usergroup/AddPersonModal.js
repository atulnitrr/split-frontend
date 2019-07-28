import React, { useState, useEffect, useContext } from "react";
import GroupOptions from "./GroupOptions";
import UserContext from "../../context/user/userContext";

const AddPersonModal = () => {
  const [userName, setUserName] = useState("");
  const [userGroup, setUserGroup] = useState("");

  const userContext = useContext(UserContext);
  const { getAllGroups, groups, loading } = userContext;

  const onChange = e => setUserName(e.target.value);
  return (
    <div id="add_person_to_group" className="modal" style={modalStyle}>
      <div className="modal-content">
        <div className="row">
          <div className="input-field">
            <select
              name="userGroup"
              value={userGroup}
              // this class is imp otherwise it wont show option in chrome
              className="browser-default"
              onChange={e => setUserGroup(e.target.value)}
            >
              <option value="" disabled>
                Select group
              </option>
              <GroupOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={onChange}
            />
            <label htmlFor="userName">name</label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="btn blue modal-close">
          {" "}
          Enter{" "}
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "40%",
  height: "40%"
};

export default AddPersonModal;
