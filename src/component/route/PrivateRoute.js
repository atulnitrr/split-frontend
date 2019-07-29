import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...res }) => {
  const authContext = useContext(AuthContext);
  const { loggedinUser } = authContext;
  return (
    <Route
      {...res}
      render={props =>
        loggedinUser === null ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
