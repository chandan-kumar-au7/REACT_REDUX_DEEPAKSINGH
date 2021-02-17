import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import "./login.css";
import { userActionHelper } from "../redux/action/userAction";
import GOOGLE_LOGIN from "./Google_Auth";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const localstorage = localStorage;

    // console.log("Email: " + email);
    // console.log("Password: " + password);
    // console.log("localstorage: " + typeof localstorage.email);
    // console.log("typeof(email): " + typeof email);
    // console.log("localstorage: " + JSON.stringify(localstorage));
    // console.log("localstorage: " + typeof localStorage.getItem("islogedin"));
    // console.log("JSON.stringify(email): " + JSON.stringify(email));
    // console.log("JSON.stringify(pass): " + JSON.stringify(password));

    if (!localStorage.email && !localStorage.password) {
      alert("Register First ...");
      history.push("/");
    } else if (
      email === localstorage.email &&
      password === localstorage.password
    ) {
      alert("SUCCESS");
      dispatch(userActionHelper({ email, password }));
      localStorage.setItem("islogedin", true);
      history.push("/dashboard");
    } else {
      alert("Oh No!! Bad Request!! INVALID CREDIANTIALS");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 m-auto">
          <form onSubmit={formSubmitHandler}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address :</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                value={email}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password :</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                value={password}
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <GOOGLE_LOGIN />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
