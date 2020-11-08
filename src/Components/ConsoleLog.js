import React from "react";
import Typist from "react-typist";
import "./ConsoleLog.css";
import * as VscIcons from '../../node_modules/react-icons/vsc';

// VscChromeMinimize
// VscDebugStop
// VscChromeClose
// VscWindow

function consoleLog() {
  return (
    <div className="description">
      <Typist>
        <br />
        <p>Hi I am Marcela</p>
        <br />
        <p> I am a developer and this is my react portfolio </p>
        <p>
          Take a look around in the About Me and Projects to know more about me
          and the trojects I am involved with{" "}
        </p>
      </Typist>
    </div>
  );
}

export default consoleLog;
