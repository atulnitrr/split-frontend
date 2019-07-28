import React, { useContext, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import UserContext from "../../context/user/userContext";
import TransactionContext from "../../context/transaction/transactionContext";
import GroupOptions from "./GroupOptions";
import UsersOptions from "./UsersOptions";

const AddPaymentModal = () => {
  const userContext = useContext(UserContext);
  const { getUsersOfGroup } = userContext;

  const transactionContext = useContext(TransactionContext);
  const { recordPayment } = transactionContext;

  const [userName, setUserName] = useState("");
  const [groupName, setGroupName] = useState("");
  const [amount, setAmout] = useState(0);

  const onGroupSelect = e => {
    setGroupName(e.target.value);
    getUsersOfGroup(e.target.value);
  };

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
        <div className="row">
          <h5>Record payment</h5>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              className="browser-default"
              name="group"
              value={groupName}
              onChange={onGroupSelect}
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
              <UsersOptions groupName={groupName} />
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
