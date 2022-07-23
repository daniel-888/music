import React from "react";
import { Link } from "react-router-dom";

const TeamContent = [
  {
    designation: "UI Designer",
    name: "George Cortez",
    img: "img_98",
    animationDelay: "50",
  },
  {
    designation: "Product Manager",
    name: "Florence Roberts",
    img: "img_99",
    animationDelay: "100",
  },
  {
    designation: "Marketing Crew",
    name: "Marc McCormick",
    img: "img_100",
    animationDelay: "150",
  },
  {
    designation: "Developer",
    name: "George Cortez",
    img: "img_101",
    animationDelay: "200",
  },
  {
    designation: "Product Manager",
    name: "Florence Roberts",
    img: "img_102",
    animationDelay: "250",
  },
  {
    designation: "Marketing Crew",
    name: "Marc McCormick",
    img: "img_103",
    animationDelay: "300",
  },
];

const TeamOne = () => {
  return (
    <>
      {TeamContent.map((item, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animationDelay}
          key={i}
        >
          <Link
            to="/team-details-v2"
            className="team-member team-block-one mb-50"
          >
            <div className="info">
              <div className="desig">{item.designation}</div>
              <div className="name">{item.name}</div>
            </div>
            <div className="img-meta">
              <img src={`images/media/${item.img}.png`} alt="team" />
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TeamOne;
