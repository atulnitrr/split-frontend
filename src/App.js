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
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import UserState from "./context/user/UserState";
import TransactionState from "./context/transaction/TransactionState";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Router>
      <UserState>
        <TransactionState>
          <NavBar />
          <div className="container">
            <Fragment>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/activity" component={Activity} />
                <Route exact path="/group" component={Group} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route component={NotFound} />
              </Switch>
            </Fragment>
          </div>
        </TransactionState>
      </UserState>
    </Router>
  );
}

export default App;
