import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add_group_modal"
        className="btn-floating btn-large modal-trigger blue darken-2"
      >
        <i className="large material-icons">add</i>
      </a>

      <ul>
        <li>
          <a
            href="#add_person_to_group"
            className="btn-floating btn-large modal-trigger blue darken-2"
          >
            <i className="large material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
