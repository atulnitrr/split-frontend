import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add_group_modal"
        className="btn-floating btn-large modal-trigger blue darken-2"
      >
        <i className="large material-icons">+</i>
      </a>
    </div>
  );
};

export default AddBtn;
