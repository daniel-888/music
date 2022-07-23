import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioImages = [
  "screen_25",
  "screen_26",
  "screen_27",
  "screen_28",
  "screen_29",
  "screen_27",
];

const MobileAppScreenSlider = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {PortfolioImages.map((val, i) => (
          <div className="item" key={i}>
            <div className="img-holder">
              <img src={`images/assets/${val}.png`} alt="screen" />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default MobileAppScreenSlider;
