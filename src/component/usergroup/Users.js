import React, { useEffect, useContext, Fragment } from "react";
import UserItem from "./UserItem";
import TransactionContext from "../../context/transaction/transactionContext";

const Users = () => {
  const transactionContext = useContext(TransactionContext);
  const {
    currentGroupUserBalance,
    getUserBalanceInGroup,
    currentGroup,
    togglePayment,
    paymentSuccessFull,
    participantUsers
  } = transactionContext;

  useEffect(() => {
    if (currentGroup !== null) {
      getUserBalanceInGroup(currentGroup);
    }
  }, [currentGroup]);

  useEffect(() => {
    if (paymentSuccessFull) {
      getUserBalanceInGroup(currentGroup);
    }
  }, [togglePayment]);

  const getOwedByOther = user => {
    const res = [];
    currentGroupUserBalance.forEach(u => {
      const amount = u.amount;
      const paidBy = u.paidBy;
      const paidTo = u.paidTo;
      if (amount > 0 && paidBy === user) {
        res.push({ name: paidTo, amount });
      } else if (amount < 0 && paidTo === user) {
        res.push({ name: paidBy, amount: amount });
      }
    });
    return res;
  };

  const getOwedByMe = user => {
    const res = [];
    currentGroupUserBalance.forEach(u => {
      const amount = u.amount;
      const paidBy = u.paidBy;
      const paidTo = u.paidTo;
      if (amount < 0 && paidBy === user) {
        res.push({ name: paidTo, amount });
      } else if (amount > 0 && paidTo === user) {
        res.push({ name: paidBy, amount: amount });
      }
    });
    return res;
  };

  const getUserBalance = user => {
    let sum = 0;
    currentGroupUserBalance.forEach(u => {
      if (user === u.paidBy) {
        sum += u.amount;
      } else if (user === u.paidTo) {
        sum -= u.amount;
      }
    });
    return sum;
  };

  return (
    <Fragment>
      <div className="grid-2 mt-4">
        <h5>Name</h5>
        <h5>Balance</h5>
      </div>
      <div>
        {participantUsers.map(user => (
          <UserItem
            key={user}
            user={user}
            balance={getUserBalance(user)}
            owedByOther={getOwedByOther(user)}
            owedByMe={getOwedByMe(user)}
            details={currentGroupUserBalance}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Users;
