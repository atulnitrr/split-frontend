import React, { useContext, useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import UserContext from "../../context/user/userContext";
import TransactionContext from "../../context/transaction/transactionContext";
import GroupOptions from "./GroupOptions";
import AddUserOptions from "./options/AddUserOptions";

const AddPaymentModal = () => {
  const userContext = useContext(UserContext);
  const {
    getUsersOfGroup,
    currentGroupUser,
    toggleAddUser,
    addUserSuccess,
    userAddedInGroup
  } = userContext;

  const transactionContext = useContext(TransactionContext);
  const {
    recordPayment,
    togglePayment,
    paymentSuccessFull,
    paymentError,
    clearPaymentError
  } = transactionContext;

  const [userName, setUserName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [amount, setAmout] = useState(0);

  useEffect(() => {
    if (paymentSuccessFull) {
      M.toast({
        html: `${userName} added ${amount} in group ${groupName}`,
        classes: "green"
      });
    } else if (paymentError !== null) {
      M.toast({ html: "Could not add transaction ", classes: "red" });
      clearPaymentError();
    }
    setUserName("");
    setGroupName("");
    setAmout(0);
  }, [togglePayment]);

  useEffect(() => {
    if (groupName !== "") {
      getUsersOfGroup(groupName);
    }
  }, [groupName]);

  // when someone add the user in the middle like if we first went to trans modal and selcted a group
  // now we came back to add user in group modal and added user in that group in this case if we
  // go back to trans modal again then we will see the new user added in dropdown
  useEffect(() => {
    if (groupName === userAddedInGroup && addUserSuccess) {
      getUsersOfGroup(groupName);
    }
  }, [toggleAddUser]);

  const onSubmit = e => {
    if (isNaN(amount)) {
      M.toast({
        html: "Please enter valid amount - " + amount,
        classes: "red"
      });
    } else {
      const payments = [];
      payments.push({ paidBy: userName, amount: amount });
      recordPayment(groupName, payments);
    }
  };

  return (
    <div id="add_bill" className="modal">
      <div className="modal-content">
        <div className="row">Record payment</div>
        <div className="row">
          <div className="input-field">
            <select
              className="browser-default"
              name="group"
              value={groupName}
              onChange={e => setGroupName(e.target.value)}
            >
              <option value="" disabled>
                Select group ..
              </option>
              <GroupOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              className="browser-default"
              name="userName"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            >
              <option value="" disabled>
                Select user ...
              </option>
              <AddUserOptions user={currentGroupUser} filterUser={[]} />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="amout"
              value={amount}
              onChange={e => setAmout(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a className="btn blue modal-close" onClick={onSubmit}>
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddPaymentModal;
