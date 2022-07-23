import React from "react";
import { Link } from "react-router-dom";

const FeaturesContent = [
  {
    img: "55",
    title: "Personal",
    desc: ` With deski docs, you can write, edit, and collaborate wherever you
        are. For Free.`,
    routePath: "/",
    dataDelay: "100",
  },
  {
    img: "57",
    title: "Business",
    desc: `The deski Docs you love with added security and control for teams.`,
    routePath: "/",
    dataDelay: "200",
  },
];

const FancyFeatureEight = () => {
  return (
    <div className="row">
      {FeaturesContent.map((val, i) => (
        <div
          className="col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.dataDelay}
        >
          <div className="block-style-ten">
            <div className="icon">
              <img src={`images/icon/${val.img}.svg`} alt="icon" />
            </div>
            <h6 className="title">{val.title}</h6>
            <p>{val.desc}</p>
            <Link to="about-pm">
              {" "}
              <img src="images/icon/56.svg" alt="icon" />
            </Link>
          </div>
          {/* /.block-style-ten */}
        </div>
      ))}
    </div>
  );
};

export default FancyFeatureEight;
