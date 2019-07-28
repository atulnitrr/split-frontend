import React, { Fragment } from "react";
import AddBtn from "../layout/AddBtn";
import AddGroupModal from "./AddGroupModal";

const UserGroup = () => {
  return (
    <Fragment>
      <h2>Creat user</h2>
      <AddBtn />
      <AddGroupModal />
    </Fragment>
  );
};

export default UserGroup;
