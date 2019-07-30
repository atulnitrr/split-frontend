import React, { useEffect, useState, useContext } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import AuthContext from "../../context/auth/authContext";

const Register = props => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmpassword: ""
  });

  const { email, password, confirmpassword } = user;

  const authContext = useContext(AuthContext);
  const {
    isRegistered,
    register,
    clearRegister,
    error,
    clearError
  } = authContext;

  useEffect(() => {
    if (isRegistered) {
      props.history.push("/login");
      // this sets isRegistered to false , if i dont do this then after register it will go login but when we click on register agina it
      // will again redirect to login
      clearRegister();
    } else if (error !== null) {
      M.toast({ html: error, classes: "red" });
      clearError();
    }
  });

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (vlaidateInput()) {
      register(user);
    }
  };

  const vlaidateInput = () => {
    if (email === "" || password === "" || confirmpassword === "") {
      M.toast({ html: "Please fill all fields in the form", classes: "red" });
      return false;
    } else if (password !== confirmpassword) {
      M.toast({ html: "Password dont match", classes: "red" });
      return false;
    }
    return true;
  };

  return (
    <div className="container mt-7">
      <div className="row ">
        <div className="col s4 offset-s4">
          <h5>
            Account <span className="green-text">Register</span>
          </h5>
        </div>
      </div>
      <div className="row">
        <form className="col s12" onSubmit={onSubmit}>
          <div className="row">
            <div className="input-field col s4 offset-s4">
              <input
                id="email"
                type="email"
                name="email"
                className="validate"
                value={email}
                onChange={onChange}
              />
              <label htmlFor="email"> Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s4 offset-s4">
              <input
                id="password"
                type="password"
                name="password"
                className="validate"
                value={password}
                onChange={onChange}
              />
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
                value={confirmpassword}
                onChange={onChange}
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
