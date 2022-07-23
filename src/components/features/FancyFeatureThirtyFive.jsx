import React from "react";
import { Link } from "react-router-dom";

const featuresContent = [
  {
    icon: "181",
    bgColor: "#F7EDFF",
    title: "Mobile App",
    subTitle: `Duis aute irure dolor  reprehen derit in voluptat velit.`,
    dealyAnimation: "100",
  },
  {
    icon: "183",
    bgColor: "#FFF8E0",
    title: "Figma Design",
    subTitle: `Duis aute irure dolor  reprehen derit in voluptat velit.`,
    dealyAnimation: "200",
  },
  {
    icon: "132",
    bgColor: "#FFEBDB",
    title: "Wp Development",
    subTitle: `Duis aute irure dolor  reprehen derit in voluptat velit.`,
    dealyAnimation: "0",
  },
  {
    icon: "133",
    bgColor: "#E0F8F8",
    title: "Easy Customizable",
    subTitle: `Duis aute irure dolor  reprehen derit in voluptat velit.`,
    dealyAnimation: "100",
  },
  {
    icon: "184",
    bgColor: "#ECF1FF",
    title: "Marketing",
    subTitle: `Duis aute irure dolor  reprehen derit in voluptat velit.`,
    dealyAnimation: "200",
  },
];

const FancyFeatureThirtyFive = () => {
  return (
    <>
      {featuresContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dealyAnimation}
          key={i}
        >
          <Link to="/service-details" className="block-style-twentyTwo">
            <div
              style={{ background: val.bgColor }}
              className="icon d-flex align-items-center justify-content-center"
            >
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h4>{val.title}</h4>
            <p>{val.subTitle}</p>
          </Link>
          {/* <!-- /.block-style-twentyTwo --> */}
        </div>
      ))}
    </>
  );
};

export default FancyFeatureThirtyFive;
