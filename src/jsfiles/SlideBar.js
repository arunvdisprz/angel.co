import React from "react";
import { c6 } from "../Datafile";

function SlideBar() {
  return (
    <div>
      <div>
        <div className="slider">
          <div className="logo-slider-left"></div>
          <div className="slide-track">
            {c6.map((n, index) => (
              <div className="slide" key={index}>
                <img className="logo-img" src={n} />
              </div>
            ))}
          </div>
          <div className="logo-slider-right"></div>
        </div>
      </div>
      <hr className="CountBarforhr"></hr>
    </div>
  );
}

export default SlideBar;
