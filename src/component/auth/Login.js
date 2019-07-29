import React, { useContext, useState } from "react";

const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => setuser({ ...user, [e.target.name]: e.target.value });

  return (
    <div className="container">
      <div className="row">
        <div className="col s4 offset-s4">
          <h5>
            Account <span className="green-text"> Login </span>
          </h5>
        </div>
      </div>
      <div className="row">
        <form className="col s12">
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
