import React from "react";
import googleimage from "./pictures/googleimage.png";
import { c3 } from "../Datafile";
import { c4 } from "../Datafile";

function MailBar() {
  return (
    <div>
       <div>
      <div className="MailBar">
        <input type="email" placeholder="Your email" className="MailBar1" />
        <button className="MailBar2">{c3[0]}</button>
        <span className="MailBar3">{c3[1]}</span>
        <button className="MailBar4">
          <img src={googleimage} className="MailBar41"></img>
          <span>{c3[2]}</span>
        </button>
      </div>
    </div>
      <div className="component4">
        <span className="component41">
          {c4[0]}
          <span className="MailBarctext">{c4[1]}</span>
        </span>
        <span className="component42">
          {c4[2]}
          <span className="MailBarctext">{c4[3]}</span>
        </span>
      </div>
    </div>
  );
}

export default MailBar;
