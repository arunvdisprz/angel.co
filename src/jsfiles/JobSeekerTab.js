import React from "react";
import c1handburger from "./pictures/c1handburger.png";
import { useState } from "react";
import { c1 } from "../Datafile";
import p1 from "./pictures/Earthpicforjobseeker.png"

function JobSeekerTab() {
  const [navclass, setNavclass] = useState(false);
  const fullnavbarcall = () => {
    setNavclass(!navclass);
  };
  return (
    <div className="paddingfullpage">
      <div className="NavBarMain ">
      <div  className={`NavBar ${navclass? "notnoneborder" : ""} `} >
          <div className="imagecentervalue">
            <a>
              <img
                src="https://assets.website-files.com/61f063412698c3c0331848b0/6225831abd957d511480da22_Logo.svg"
                loading="lazy"
                alt="AngelList Talent"
              />
            </a>
          </div>
          <div className="NavBar2"> 
            <span>
              <a href={c1[1][0]} className="NavBar21">
                Overview
              </a>
            </span>
            <span>
              <a href={c1[2][0]} className="NavBar21">
                Jobs
              </a>
            </span>
            <span>
              <a href={c1[2][0]} className="NavBar21">
                Featured
              </a>
            </span>
            <span>
              <a href={c1[2][0]} className="NavBar21">
                Remote
              </a>
            </span>
            <span>
              <a href={c1[2][0]} className="NavBar21">
                For companies
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
              <div className="bluehover">Overview</div>
              <div className="bluehover">Jobs</div>
              <div className="bluehover">Featured</div>
              <div className="bluehover">Remote</div>
              <div className="bluehover">For companies</div>
              <div>
                <button className="NavBar23">Log In</button>
                <button className="NavBar24">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="BulidBar">
        <div className="BulidBarone">
          <div className="BulidBar1">
            Find the job made for you
          </div>
          <div className="BulidBar2">
            We make it easy to find your dream job - regardless of your
            location. Browse over 100,000 jobs from top companies to
            fast-growing startups.
          </div>
          <button className="BulidBar3">Create your profile</button>
          <button className="BulidBar4">Browse jobs</button>
        </div>
        <div className="imagecentervalue">
          <img src={p1} className="BulidBarsecond"></img>
        </div>
      </div>
    </div>
  );
}

export default JobSeekerTab;
