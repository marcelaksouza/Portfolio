import React, { Component } from "react";
import ConsoleLog from '../Components/ConsoleLog';

import "./home.css";
import Logo from "../Images/among_us_profile.png";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src={Logo} alt="Logo" className="app-logo" />
        <ConsoleLog />
        
      </div>
    );
  }
}

export default Home;
