import React, { Component } from "react";
// import Typist from "react-typist";
import ConsoleLog from '../Components/ConsoleLog';

import "./home.css";
import Logo from "../Images/among_us_profile.png";

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <img src={Logo} alt="Logo" className="app-logo" />
        <ConsoleLog />
        {/* <div className="description">
        <Typist >
          <br />
          <p >Hi I am Marcela</p>
          
          <br />
          
            <p> I am a developer and this is my react portfolio </p>
            <p>Take a look around in the About Me and Projects to 
                know more about me and the trojects I am involved with </p>
         
        </Typist>
        </div> */}
      </div>
    );
  }
}

export default Home;
