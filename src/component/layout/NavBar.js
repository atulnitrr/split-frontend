import React, { Fragment, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const NavBar = () => {
  const authContext = useContext(AuthContext);
  const { loggedinUser, logout, clearError } = authContext;

  const onLogout = () => {
    logout();
  };

  const userLink = (
    <Fragment>
      <div>
        <Link to="/"> Home </Link>
      </div>

      <div>
        <Link to="/group">Groups</Link>
      </div>

      <div>
        <Link to="/activity">Activity</Link>
      </div>
      <div>
        <span className="welcome"> Hello {loggedinUser}</span>
      </div>
      <div>
        <a href="#!" onClick={onLogout}>
          {" "}
          Logout
        </a>
      </div>
    </Fragment>
  );

  const guestLink = (
    <Fragment>
      <div>
        <Link to="/register">Register</Link>
      </div>

      <div>
        <Link to="/login">Login</Link>
      </div>
    </Fragment>
  );

  return (
    <div className="navbar">{loggedinUser !== null ? userLink : guestLink}</div>
  );
};

export default NavBar;
