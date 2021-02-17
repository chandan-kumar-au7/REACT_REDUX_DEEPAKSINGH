import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userActionHelper } from "../redux/action/userAction";

const RegisterForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(userActionHelper({ name, email, password }));
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    history.push("/login");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 m-auto">
          <form onSubmit={formSubmitHandler}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail2">Name :</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                value={name}
                id="exampleInputEmail2"
                required
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address :</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                value={email}
                id="exampleInputEmail1"
                required
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
                required
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
