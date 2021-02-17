import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = (props) => {
  console.log("props ", props);
  return (
    <div className="Navigation">
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            <i
              className="large material-icons"
              style={{
                fontSize: "5rem",
                color: "yellow",
                marginLeft: "-45vw ",
              }}
            >
              accessibility
            </i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink className="NavChild" to="/">
                Signup
              </NavLink>
            </li>
            <li>
              {localStorage.getItem("islogedin") ? (
                <NavLink
                  className="NavChild"
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/login";
                  }}
                  to="/logout"
                >
                  LogOut
                </NavLink>
              ) : (
                <NavLink className="NavChild" to="/login">
                  Login
                </NavLink>
              )}
            </li>

            <li>
              <NavLink className="NavChild" to="/dashboard">
                User_Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.userRegister.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Navbar);
