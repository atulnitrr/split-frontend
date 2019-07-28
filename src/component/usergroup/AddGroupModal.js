import React, { useState, useContext, useEffect } from "react";
import UserContext from "../../context/user/userContext";
import M from "materialize-css/dist/js/materialize.min.js";

const AddGroupModal = () => {
  const userContext = useContext(UserContext);
  const { addGroup, clearError, error, groupAdded } = userContext;

  const [groupName, setGroupName] = useState("");
  const onChange = e => setGroupName(e.target.value);

  useEffect(() => {
    if (groupAdded) {
      M.toast({ html: `Group added --> ${groupName}`, classes: "green" });
    } else if (error !== null) {
      M.toast({ html: error, classes: "red" });
    }
  }, [error, groupAdded]);

  const onsubmit = e => {
    if (groupName === "") {
      M.toast({ html: "Please enter group Name", classes: "red" });
    } else {
      addGroup(groupName);
    }
  };

  return (
    <div id="add_group_modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="groupName"
              placeholder="enter group name ......"
              value={groupName}
              onChange={onChange}
            />
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          className="btn blue modal-close waves-effect waves-green"
          onClick={onsubmit}
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "40%",
  height: "40%"
};

export default AddGroupModal;
