import React from "react";
import { c12 } from "../Datafile";
import { c13 } from "../Datafile";

function BlogBar() {
  return (
    <div>
      <hr></hr>
      <div>
        <div className="BlogBarin">
          <div className="BlogBarin1">
            <div className="BlogBarin11">{c12[0]}</div>
            <button className="NavBar23">{c12[1]}</button>
          </div>
        </div>
      </div>
      <div className="BlogBarSecondin">
        {c13.map((n, index) => (
          <div className="BlogBarSecondin1" key={index}>
            <img src={n.imageData} className="BlogBarSecondin11" />
            <div className="BlogBarSecondin12">
              <div className="BlogBarSecondin121">{n.header}</div>
              <div className="BlogBarSecondin122">{n.desc}</div>
              <div className="BlogBarSecondin123">{n.brief}</div>
              <button className="NavBar23">Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogBar;
