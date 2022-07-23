import React from "react";

const CounterContent = [
  {
    count: "13",
    css: { color: "#5cd0a7" },
    subTitle: "Different Home",
    other: "pages",
    className: "",
  },
  {
    count: "60+",
    css: { color: "#FF7373" },
    subTitle: " Beautiful total",
    other: "pages",
    className: "border-style",
  },
  {
    count: "04",
    css: { color: "#8B50FF" },
    subTitle: " Beautiful docs for your",
    other: "APIs, Products",
    className: "",
  },
];

const DemoCounter = () => {
  return (
    <div className="row">
      {CounterContent.map((val, i) => (
        <div className="col-md-4" key={i}>
          <div className={`single-block ${val.className}`}>
            <div className="num font-rubik" style={val.css}>
              {val.count}
            </div>
            <p className="font-rubik">
              {val.subTitle}
              <br />
              {val.other}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
  // End .row
};

export default DemoCounter;
