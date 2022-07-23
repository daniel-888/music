import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function TeamSlider() {
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

  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {TeamContent.map((item, i) => (
          <div
            className="item"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay={item.animationDelay}
            key={i}
          >
            <Link to="/team-details-v2" className="team-member team-block-one">
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
      </Slider>
    </>
  );
}
