import React from "react";
import p1 from "./pictures/p1.png"
import { c2 } from "../Datafile";

function BulidBar() {
  return (
    <div className="BulidBar">
      <div className="BulidBarone">
        <div className="BulidBar1 BulidBarSpecific1">{c2[0]}</div>
        <div className="BulidBar2">{c2[2]}</div>
        <button className="BulidBar3">{c2[3]}</button>
        <button className="BulidBar4">{c2[4]}</button>
      </div>
      <div className="imagecentervalue">
        <img src={p1} className="BulidBarsecond"></img>
      </div>
    </div>
  );
}

export default BulidBar;
