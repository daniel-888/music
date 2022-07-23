import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioContent = [
  {
    img: "img_24",
    meta: "User Interface",
    title: "Deski - Art & Illustration",
  },
  {
    img: "img_27",
    meta: "Web developemnt",
    title: "Deski - Art & Illustration",
  },
  {
    img: "img_26",
    meta: "Social Marketing",
    title: "Deski - Art & Illustration",
  },
  {
    img: "img_25",
    meta: "lead generation",
    title: "Deski - Art & Illustration",
  },
];

const Portfolio = () => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <>
      <Slider {...settings}>
        {PortfolioContent.map((val, i) => (
          <div className="item" key={i}>
            <div className="portfolio-block-three">
              <Link to="/portfolio-details-v1" className="img-holder">
                <img
                  src={`images/gallery/${val.img}.jpg`}
                  alt="portfolio"
                  className="w-100 tran5s"
                />
              </Link>
              <div className="text">
                <div className="tag">{val.meta}</div>
                <h4>
                  <Link to="/portfolio-details-v1">{val.title}</Link>
                </h4>
              </div>
            </div>
            {/* /.portfolio-block-three  */}
          </div>
          //  End .item
        ))}
      </Slider>
    </>
  );
};

export default Portfolio;
