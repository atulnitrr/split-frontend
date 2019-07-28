import React, { Fragment } from "react";
import AddBtn from "../layout/AddBtn";
import AddGroupModal from "./AddGroupModal";
import AddPersonModal from "./AddPersonModal";
import AddPaymentModal from "./AddPaymentModal";

const UserGroup = () => {
  return (
    <Fragment>
      <AddBtn />
      <AddGroupModal />
      <AddPersonModal />
      <AddPaymentModal />
    </Fragment>
  );
};

export default UserGroup;
