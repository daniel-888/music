import React from "react";
import { Link } from "react-router-dom";

const FeatureContent = [
  {
    icon: "12",
    title: "Media & Hospital",
    subTitle: `Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dole magna aliqua. Ut enim`,
    dataDelay: "0",
  },
  {
    icon: "13",
    title: "Educational",
    subTitle: `Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dole magna aliqua. Ut enim`,
    dataDelay: "100",
  },
  {
    icon: "14",
    title: "Financial Service",
    subTitle: `Lorem ipsum dolor amet, consetre adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dole magna aliqua. Ut enim`,
    dataDelay: "300",
  },
];

const FeatureFive = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDelay}
        >
          <div className="block-style-four">
            <div className="icon">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            <p>{val.subTitle}</p>
            <Link to="/about-pm">
              {" "}
              <i className="flaticon-right-arrow"></i>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureFive;
