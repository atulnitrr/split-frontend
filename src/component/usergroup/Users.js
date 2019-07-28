import React, { useEffect, useContext, Fragment } from "react";
import UserItem from "./UserItem";
import TransactionContext from "../../context/transaction/transactionContext";

const Users = () => {
  const transactionContext = useContext(TransactionContext);
  const {
    currentGroupUserBalance,
    getUserBalanceInGroup,
    currentGroup,
    paymentDone,
    clearPayment
  } = transactionContext;

  useEffect(() => {
    if (currentGroup !== null) {
      getUserBalanceInGroup(currentGroup);
      clearPayment();
    }
  }, [currentGroup, paymentDone]);

  return (
    <Fragment>
      <div className="grid-2 mt-4">
        <h5>Name</h5>
        <h5>Balance</h5>
      </div>
      <div>
        {currentGroupUserBalance.map(user => (
          <UserItem key={user.name} user={user} />
        ))}
      </div>
    </Fragment>
  );
};

export default Users;
