import React from "react";
import { Link } from "react-router-dom";

const TeamContent = [
  {
    designation: "Developer",
    name: "George Cortez",
    img: "img_66",
    animationDelay: "200",
  },
  {
    designation: "Co-Founder",
    name: "Juan Barber",
    img: "img_67",
    animationDelay: "250",
  },
  {
    designation: "Marc McCormick",
    name: "Marketing Crew ",
    img: "img_68",
    animationDelay: "300",
  },
  {
    designation: "Customer management",
    name: "Maud Ellis",
    img: "img_69",
    animationDelay: "50",
  },
  {
    designation: "Senior Designer",
    name: "Jhon Du",
    img: "img_70",
    animationDelay: "100",
  },
  {
    designation: "Co-Founder",
    name: "Juan Barber",
    img: "img_71",
    animationDelay: "150",
  },
];

const TeamFive = () => {
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
          <Link to="/team-details-v1" className="team-member">
            <div className="img-holder">
              <img src={`images/media/${item.img}.png`} alt="team" />
            </div>
            <h6 className="name">{item.name}</h6>
            <div className="position">{item.designation}</div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TeamFive;
