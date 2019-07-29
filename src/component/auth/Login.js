import React, { useContext, useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import AuthContext from "../../context/auth/authContext";

const Login = props => {
  const [user, setuser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const authContext = useContext(AuthContext);
  const { login, loggedinUser } = authContext;

  useEffect(() => {
    if (loggedinUser !== null) {
      props.history.push("/");
    }
  }, [loggedinUser]);

  const onChange = e => setuser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (validateInput()) {
      login(user);
    }
  };

  const validateInput = () => {
    if (email === "" || password === "") {
      M.toast({ html: "Please enter all fields", classes: "red" });
      return false;
    }
    return true;
  };

  return (
    <div className="container mt-7">
      <div className="row">
        <div className="col s4 offset-s4">
          <h5>
            Account <span className="green-text"> Login </span>
          </h5>
        </div>
      </div>
      <div className="row">
        <form className="col s12" onSubmit={onSubmit}>
          <div className="row">
            <div className="input-field col s4 offset-s4">
              <input
                type="email"
                name="email"
                id="email"
                className="validate"
                value={email}
                onChange={onChange}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s4 offset-s4">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="col s4 offset-s4">
              <button className="btn">
                Account Login <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
