import React from "react";
import { c11 } from "../Datafile";
function GetFeature() {
  return (
    <div>
      <hr></hr>
      <div className="GetFeaturein">
        {c11.map((n, index) => (
          <div className="GetFeaturein1" key={index}>
            <div className="GetFeaturein11" style={n.content6}>
              <img src={n.image} className="GetFeaturein111"></img>
            </div>
            <div className="GetFeaturein12" style={n.content7}>
              <div className="GetFeaturein121">{n.content1}</div>
              <div className="GetFeaturein122">{n.content2}</div>
              <div className="GetFeaturein123">
                {n.content3}
                <br></br>
                <br></br>
                {n.content4}
              </div>
              <br></br>
              <button className="NavBar23">{n.content5}</button>
            </div>
          </div>
        ))}
        <hr></hr>
      </div>
    </div>
  );
}

export default GetFeature;
