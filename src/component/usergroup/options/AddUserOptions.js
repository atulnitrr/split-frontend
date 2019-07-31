import React from "react";

const AddUserOptions = ({ user, filterUser }) => {
  console.log("usert otions");
  console.log(user);
  console.log(filterUser);
  const alreadyPresent = filterUser.map(u => u.email);
  return user
    .filter(u => !alreadyPresent.includes(u.email))
    .map(t => <option key={t.email}>{t.email}</option>);
};

export default AddUserOptions;
