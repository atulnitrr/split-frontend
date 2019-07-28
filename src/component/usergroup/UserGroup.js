import React, { Fragment } from "react";
import AddBtn from "../layout/AddBtn";
import AddGroupModal from "./AddGroupModal";
import AddPersonModal from "./AddPersonModal";

const UserGroup = () => {
  return (
    <Fragment>
      <h2>Creat user</h2>
      <AddBtn />
      <AddGroupModal />
      <AddPersonModal />
    </Fragment>
  );
};

export default UserGroup;
