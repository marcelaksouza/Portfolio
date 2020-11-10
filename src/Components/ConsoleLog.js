import React from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import "./ConsoleLog.css";
import * as VscIcons from "../../node_modules/react-icons/vsc";
import { IconContext } from 'react-icons';
import 'react-typist/dist/Typist.css';

function consoleLog() {
  return (
    
    <div className="consoleLog">
        <IconContext.Provider value={{color: ' #88006B'}}>
      <div className="consoleTop">
        <span className="left">
          <Link to="#" className="">
            <VscIcons.VscWindow />
          </Link>
          <span className="text">Command Prompt</span>
        </span>
        <span className="right">
          <Link to="#" className="">
            <VscIcons.VscChromeMinimize />
          </Link>
          <Link to="#" className="">
            <VscIcons.VscDebugStop />
          </Link>
          <Link to="#" className="">
            <VscIcons.VscChromeClose />
          </Link>
        </span>
      </div>
      <div className="description">
        <Typist 
            className="MyTypist"
            avgTypingDelay={100}>
          Hi I am Marcela
          <br/>
          <br/>
           I am a web developer/cumputer science enthusiastic and this is my react portfolio.
          <br/>
          Now its your time to go explore, I hope you enjoy, and please dont forget to 
          drop me a message when you done. ;)
          {/* <p> Take a look around, in the About Me tab 
              you will find what are my qualifications, awards, certification and skills set.</p>
          <p> In the Projects tab, there is where you will find the projects I developed and/or I was part of.</p>
          <p> Soon to come, I want to give back to the community my acknowledgment to do so I plan to write about Tech related topics in the Blog tab. </p>
          <p> Finally, if you wish to contact me please, you can do it in the Contact Tab. I am currently open to work, so if you think 
            I could bring value to your company don't hesitate to contact me, I would love to have a chat with you.
            Please feel welcome to write me feedback and/or your thoughts about any of my projects,
            I will happily write you back as soon as I can.</p>  
            <p>Have a good one :)</p> */}
        </Typist>
      </div>
      </IconContext.Provider>
    </div>
  );
}

export default consoleLog;
