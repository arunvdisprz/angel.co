import c10311 from "./pictures/c10311.svg";
import React from "react";
import { c10 } from "../Datafile";

function DreamBar() {
  return (
    <div>
      <div className="DreamBar">
        <div className="DreamBar1">FROM OUR USERS</div>
        <div className="DreamBar2">Dreams do come true!</div>
        <div className="DreamBar3">
          {c10.map((n, index) => (
            <div className="DreamBar31" key={index}>
              <img src={c10311}></img>
              <div className="DreamBar31text">{n}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DreamBar;
