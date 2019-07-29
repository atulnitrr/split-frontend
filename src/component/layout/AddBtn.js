import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add_group_modal"
        className="btn-floating btn-large modal-trigger blue darken-2 tooltipped"
        data-position="left"
        data-tooltip="Add group"
      >
        <i className="large material-icons">add</i>
      </a>

      <ul>
        <li>
          <a
            href="#add_bill"
            className="btn-floating btn-large modal-trigger blue darken-2 tooltipped"
            data-position="left"
            data-tooltip="Record payment"
          >
            <i className="large material-icons">payment</i>
          </a>
        </li>
        <li>
          <a
            href="#add_person_to_group"
            className="btn-floating btn-large modal-trigger blue darken-2 tooltipped"
            data-position="left"
            data-tooltip="Add user in group"
          >
            <i className="large material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
