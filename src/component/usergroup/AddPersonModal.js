import React, { useState, useEffect, useContext } from "react";

const AddPersonModal = () => {
  const [userName, setUserName] = useState("");
  const [userGroup, setUserGroup] = useState("");
  const onChange = e => setUserName(e.target.value);
  return (
    <div id="add_person_to_group" className="modal" style={modalStyle}>
      <div className="modal-content">
        <div className="row">
          <div className="input-field">
            <select
              name="userGroup"
              value={userGroup}
              onChange={e => setUserGroup(e.target.value)}
            >
              <option value="" disabled>
                Select group
              </option>
              <option>Tst</option>
              <option>Tet</option>
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
