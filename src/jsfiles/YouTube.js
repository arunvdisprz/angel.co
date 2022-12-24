import React from "react";
import { c9 } from "../Datafile";

function YouTube() {
  return (
    <div>
      <div className="GotTalentBar">
        <div className="imagecentervalue">
          <iframe
            src="https://www.youtube.com/embed/_7baCoOPafM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="ytimage"
          ></iframe>
        </div>
        <div className="GotTalentBar2">
          <div className="GotTalentBar21">INTRODUCING:</div>
          <div className="GotTalentBar22">REMOTE by AngelList Talent</div>
          {c9.map((num, index) => (
            <div className="GotTalentBar23" key={index}>
              <img src={num.image} className="GotTalentBar23image"></img>{" "}
              <div>
                <span>{num.content}</span>
              </div>
            </div>
          ))}

          <div className="GotTalentBar23text">
            <button className="NavBar23">Learn more - job seekers</button>
            <button className="NavBar23">Learn more - recruiters</button>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default YouTube;
