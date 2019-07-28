import React from "react";

const UserItem = ({ user }) => {
  return (
    <div className="userItem grid-2">
      <h6> {user.name}</h6>
      <h6> {user.amout}</h6>
    </div>
  );
};

export default UserItem;
