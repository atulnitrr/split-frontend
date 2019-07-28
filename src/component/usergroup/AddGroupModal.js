import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddGroupModal = () => {
  const [groupName, setGroupName] = useState("");

  const onChange = e => setGroupName(e.target.value);

  const onsubmit = e => {
    if (groupName === "") {
      M.toast({ html: "Please enter group Name" });
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
  height: "30%"
};

export default AddGroupModal;
