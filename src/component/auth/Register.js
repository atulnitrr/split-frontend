import React from "react";

const Register = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col s4 offset-s4">
          <h5>
            Account <span className="green-text">Register</span>
          </h5>
        </div>
      </div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s4 offset-s4">
              <input
                id="email"
                type="email"
                name="email"
                className="validate"
              />
              <label htmlFor="email"> Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s4 offset-s4">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s4 offset-s4">
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                className="validate"
              />
              <label htmlFor="confirmpassword">Confirm Password</label>
            </div>
          </div>
          <div className="row">
            <div className="col s6 offset-s4">
              <button className="btn" type="submit">
                Register Account <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
