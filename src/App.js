import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import UserGroup from "./component/usergroup/UserGroup";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="container">
      <h2>Testing</h2>
      <Fragment>
        <UserGroup />
      </Fragment>
    </div>
  );
}

export default App;
