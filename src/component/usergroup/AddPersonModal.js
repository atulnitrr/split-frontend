import React, { useState, useEffect, useContext } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import GroupOptions from "./GroupOptions";
import AddUserOptions from "./options/AddUserOptions";
import UserContext from "../../context/user/userContext";

const AddPersonModal = () => {
  const [userName, setUserName] = useState("");
  const [userGroup, setUserGroup] = useState("");

  const userContext = useContext(UserContext);
  const {
    userAdded,
    addUser,
    error,
    clearError,
    availableUsers,
    getAvailableUsers
  } = userContext;

  useEffect(() => {
    getAvailableUsers();
    if (userAdded) {
      M.toast({ html: `${userName} added`, classes: "green" });
    } else if (error !== null) {
      M.toast({ html: `${userName} could not be added`, classes: "red" });
    }
    clearError();
  }, [userAdded, error]);

  const onChange = e => {
    setUserName(e.target.value);
  };

  const onsubmit = e => {
    if (userName === "") {
      M.toast({ html: `Please give user name ${userName} `, classes: "red" });
    } else {
      const users = [];
      users.push(userName);
      addUser(userGroup, users);
      setUserGroup("");
      setUserName("");
    }
  };
  return (
    <div id="add_person_to_group" className="modal" style={modalStyle}>
      <div className="modal-content">
        <div className="row">Add user in group</div>
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
            <select
              name="userName"
              value={userName}
              className="browser-default"
              onChange={onChange}
            >
              <option value="" disabled>
                Select user
              </option>
              <AddUserOptions user={availableUsers} />
            </select>
          </div>
        </div>
        {/* <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={onChange}
            />
            <label htmlFor="userName">name</label>
          </div>
        </div> */}
      </div>
      <div className="modal-footer">
        <a href="#!" className="btn blue modal-close" onClick={onsubmit}>
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
