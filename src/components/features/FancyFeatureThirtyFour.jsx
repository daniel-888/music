import React from "react";
import { Link } from "react-router-dom";

const featuresContent = [
  {
    bgColor: "#F7EDFF",
    icon: "178",
    title: "UI/UX Design",
    descriptions:
      "Wooked up one of the more cuatin words popenaissan printer took a galley of type and scram Cicero are also reproduced.",
    dealyAnimation: "",
  },
  {
    bgColor: "#D8FFF1",
    icon: "179",
    title: "Online Marketing",
    descriptions:
      "Build an online store that rank higher & sell more and integrates easily ooCommerce, to enhance the quality",
    dealyAnimation: "100",
  },
  {
    bgColor: "#E6FBFF",
    icon: "180",
    title: "WordPress dev.",
    descriptions:
      "It saves the client cards on file securely for an effortless checkout experience using our advanced, secure payments system.",
    dealyAnimation: "",
  },
  {
    bgColor: "#FFEBDB",
    icon: "181",
    title: "App Devlopment",
    descriptions:
      "Our Scheduling Platform is Simple yet Powerful that you need to grow and manage your business in single user interface.",
    dealyAnimation: "100",
  },
];

const FancyFeatureThirtyFour = () => {
  return (
    <div className="row">
      {featuresContent.map((item, i) => (
        <div
          className="col-md-6"
          data-aos="fade-up"
          data-aos-delay={item.dealyAnimation}
          key={i}
        >
          <div className="block-style-thirtyTwo d-flex">
            <div
              className="icon d-flex align-items-center justify-content-center"
              style={{ background: item.bgColor }}
            >
              <img src={`images/icon/${item.icon}.svg`} alt="icon" />
            </div>
            <div className="text">
              <h4>{item.title}</h4>
              <p>{item.descriptions}</p>
              <Link to="/service-details" className="tran3s">
                <img src="images/icon/182.svg" alt="icon" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureThirtyFour;
