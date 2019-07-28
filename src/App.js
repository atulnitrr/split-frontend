import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import UserGroup from "./component/usergroup/UserGroup";
import Home from "./component/pages/Home";
import Activity from "./component/pages/Activity";
import Group from "./component/pages/Group";
import NotFound from "./component/pages/NotFound";
import NavBar from "./component/layout/NavBar";
import UserState from "./context/user/UserState";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Router>
      <UserState>
        <NavBar />
        <div className="container">
          <Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/activity" component={Activity} />
              <Route exact path="/group" component={Group} />
              <Route component={NotFound} />
            </Switch>
          </Fragment>
        </div>
      </UserState>
    </Router>
  );
}

export default App;
