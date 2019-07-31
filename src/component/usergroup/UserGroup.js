import React, { Fragment, useEffect } from "react";
import AddBtn from "../layout/AddBtn";
import AddGroupModal from "./AddGroupModal";
import AddPersonModal from "./AddPersonModal";
import AddPaymentModal from "./AddPaymentModal";
import M from "materialize-css/dist/js/materialize.min.js";

const UserGroup = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Fragment>
      <AddBtn />
      <AddGroupModal />
      <AddPersonModal />
      {/* <AddPaymentModal /> */}
    </Fragment>
  );
};

export default UserGroup;
