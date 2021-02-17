import React from "react";
import Navbar from "./pages/Navbar";
import RegisterForm from "./pages/RegisterForm";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={RegisterForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
