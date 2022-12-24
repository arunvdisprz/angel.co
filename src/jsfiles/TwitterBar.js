import c15in11 from "./pictures/c15in11.svg";
import twittericon from "./pictures/twitter.png";
import instaicon from "./pictures/instagram.png";
import React from "react";
import { c15} from "../Datafile";

function TwitterBar() {
  return (
    <div>
      <div className="TwitterBarin">
        <div>
          <div className={"TwitterBarin11"}>
            <a href="#">
              <img src={c15in11}></img>
            </a>
          </div>
          <div className="TwitterBarin12">
            <span className="TwitterBarin121">
              <a href="#">
                <img src={twittericon} className="TwitterBarin1211"></img>
              </a>
            </span>
            <span>
              <a href="#">
                <img src={instaicon} className="TwitterBarin1211"></img>
              </a>
            </span>
          </div>
        </div>
        <div className="TwitterBarin2">
          {c15.map((num, index) => (
            <div className="TwitterBarin21" key={index}>
              <div className="TwitterBarin211" key={index}>
                {num.title}
              </div>
              {num.dropdown}
            </div>
          ))}
        </div>
      </div>
      <div className="TwitterBarin213">
        <div>Copyright &copy; 2022 AngelList Talent. All rights reserved.</div>

        <div>
          Browse by:{" "}
          <span>
            <a className="MailBarctext" href="#">
              Jobs
            </a>
            ,
            <a className="MailBarctext" href="#">
              Remote Jobs
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TwitterBar;
