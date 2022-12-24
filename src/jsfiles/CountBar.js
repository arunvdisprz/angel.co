import React from "react";
import { useEffect, useState } from "react";

function CountBar() {
  const [count, setCount] = useState(300000);
  useEffect(() => {
    if (count < 6000000) {
      setTimeout(() => {
        setCount(count + 100000);
      }, 40);
    }
  }, [count]);

  const c5 = [
    {
      num: "130K +",
      text: "Tech Jobs",
      margin: {},
    },
    {
      num: count,
      text: "Matches Made",
      margin: {},
    },
    {
      num: "8M +",
      text: "Startup-ready candidates",
      margin: { borderRight: "0px" },
    },
  ];
  return (
    <div>
      {/* com5 */}
      <div className="CountBar">
        {c5.map((n, index) => (
          <div className="CountBar1" style={n.margin} key={index}>
            <div className="CountBart1c">{n.num}</div>
            <div className="CountBart2c">{n.text}</div>
          </div>
        ))}
      </div>
      <hr className="CountBarforhr"></hr>
    </div>
  );
}

export default CountBar;
