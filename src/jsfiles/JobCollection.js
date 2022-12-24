import c14in12 from "./pictures/arrowicon.png";

import React from "react";
import { c14 } from "../Datafile";

function JobCollection() {
  return (
    <div>
      <div className="JobCollectionin">
        {c14.map((number, index) => (
          <div className="JobCollectionin1" key={index}>
            <button className="NavBar23d">
              <span>{number.title}</span>
              <span>
                <img src={c14in12} className="JobCollectionin12"></img>
              </span>
            </button>
            <div className="dropdown-content">{number.dropdowncontent}</div>
          </div>
        ))}
        <br></br>
      </div>
    </div>
  );
}

export default JobCollection;
