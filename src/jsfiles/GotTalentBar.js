import React from "react";
import { c7 } from "../Datafile";

function GotTalentBar() {
  return (
    <div>
      {c7.map((n, index) => (
        <div key={index}>
          <div
            className={`GotTalentBar ${n.style ? "GotTalentBarrowreverse " : ""}`}
          >
            <div className="imagecentervalue">
              <img src={n.image} className="GotTalentBar1"></img>
            </div>
            <div className="GotTalentBar2">
              <div className="GotTalentBar21">{n.com1}</div>
              <div className="GotTalentBar22">{n.com2}</div>
              <div className="GotTalentBar23div">{n.com3}</div>
              <div className="GotTalentBarbutton">
                <button className="NavBar23">Learn more</button>
                <button className="NavBar24">Sign up now</button>
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default GotTalentBar;
// //       <div className="GotTalentBar" style={{flexDirection:}}>
// <div>
// <img src={c71} className="GotTalentBar1"></img>
// </div>
// <div className="GotTalentBar2">
// <div className="GotTalentBar21">GOT TALENT?</div>
// <div className="GotTalentBar22">Why job seekers love us</div>
// <div className="GotTalentBar23div">
//   <div className="GotTalentBar23">
//     <img src={c7231} className="GotTalentBar23image"></img>{" "}
//     <span>
//       Unique jobs at <strong>startups</strong> and{" "}
//       <strong>tech companies</strong> you can't find anywhere else
//     </span>
//   </div>
//   <div className="GotTalentBar23">
//     <img src={c7232} className="GotTalentBar23image"></img>{" "}
//     <span>
//       Say goodbye to cover letters - your profile is all you need.
//       <strong> Oneclick to apply </strong>
//       and you're done.
//     </span>
//   </div>
//   <div className="GotTalentBar23">
//     <img src={c7233} className="GotTalentBar23image"></img>{" "}
//     <span className="GotTalentBar23text">
//       Everything you need to know to job search - including seeing
//       <strong> salary </strong>and <strong> stock options </strong>{" "}
//       upfront when looking
//     </span>
//   </div>
//   <div className="GotTalentBar23">
//     <img src={c7234} className="GotTalentBar23image"></img>{" "}
//     <span className="GotTalentBar23text">
//       Connect directly with <strong> founders </strong> at top
//       startups - no third party recruiters allowed
//     </span>
//   </div>
// </div>
// <div className="GotTalentBarbutton">
//   <button className="NavBar23">Learn more</button>
//   <button className="NavBar24">Sign up now</button>
// </div>
// </div>
// </div>
