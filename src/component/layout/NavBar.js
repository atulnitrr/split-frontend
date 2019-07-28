import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/"> Home </Link>
      </div>

      <div>
        <Link to="/group">Groups</Link>
      </div>

      <div>
        <Link to="/activity">Activity</Link>
      </div>
    </div>
  );
};

export default NavBar;
