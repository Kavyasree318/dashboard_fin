import React, { Component } from "react";
import "./css/home.css";
import Main from "./entry";
import Dashboard from './dashboard';

class Home extends Component {
  render() {
    return (
      <div>
        <h3 className="mainheading">Enter start date and end date</h3>;
        <Main />
        <hr className = "main_hr"/>
        <Dashboard />
        {/* <Class />
          <Function /> */}
      </div>
    );
  }
}

export default Home;
