import React from "react";
import c1handburger from "./pictures/c1handburger.png";
import { useState } from "react";
import { c1 } from "../Datafile";
import { Link } from "react-router-dom";
function NavBar() {

  const [navclass, setNavclass] = useState(false);
  const fullnavbarcall = () => {
    setNavclass(!navclass);
  };

  return (
    <div className="NavBarMain" >
      <div  className={`NavBar ${navclass? "notnoneborder" : ""} `} >
        <div className="imagecentervalue">
          <a>
            <img src={c1[0]} className="NavBar1 imagecentervalue" />
          </a>
        </div>
        <div className="NavBar2">
          <span>
            <Link to="/jobseeker" className="NavBar21">
              {c1[1][1]}
            </Link>
          </span>
          <span>
            <a href={c1[2][0]} className="NavBar21">
              {c1[2][1]}
            </a>
          </span>
          <button className="NavBar23">Log In</button>
          <button className="NavBar24">Sign Up</button>
        </div>
        <button onClick={fullnavbarcall} className="BlogBarbutton">
          <img src={c1handburger} className="BlogBar"></img>
        </button>
      </div>
      {navclass && (
        <div className="notnone">
          <div>
            <div className="bluehover">{c1[1][1]}</div>
            <div className="bluehover">{c1[2][1]}</div>
            <div>
              <button className="NavBar23">Log In</button>
              <button className="NavBar24">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;