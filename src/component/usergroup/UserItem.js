import React from "react";

const UserItem = ({ user, balance, owedByOther, owedByMe }) => {
  console.log(user);
  console.log(balance);
  console.log(owedByOther);
  console.log(owedByMe);
  return (
    <div className="userItem grid-2">
      <h6> {user}</h6>
      <h6> {balance}</h6>
      <div className="row">
        {owedByOther.map(u => (
          <div key={u.name} className="green-text">
            {" "}
            {u.name} owes me -> {u.amount < 0 ? -u.amount : u.amount}
          </div>
        ))}
        {owedByMe.map(u => (
          <div key={u.name} className="red-text">
            {" "}
            I owe {u.name} -> {u.amount < 0 ? -u.amount : u.amount}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserItem;
