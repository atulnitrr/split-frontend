import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import UserGroup from "./component/usergroup/UserGroup";
import UserState from "./context/user/UserState";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <UserState>
      <div className="container">
        <h2>Testing</h2>
        <Fragment>
          <UserGroup />
        </Fragment>
      </div>
    </UserState>
  );
}

export default App;
