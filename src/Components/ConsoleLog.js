import React from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import "./ConsoleLog.css";
import * as VscIcons from "../../node_modules/react-icons/vsc";
import { IconContext } from 'react-icons'


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
        <Typist>
          <p>Hi I am Marcela</p>
          <br />
          <p> I am a developer and this is my react portfolio </p>
          <p>
            Take a look around in the About Me and Projects to know more about
            me and the trojects I am involved with{" "}
          </p>
        </Typist>
      </div>
      </IconContext.Provider>
    </div>
  );
}

export default consoleLog;
