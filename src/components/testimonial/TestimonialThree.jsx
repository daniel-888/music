import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TestimonialThree() {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    margin: 30,
  };

  const TestimonilContent = [
    {
      desc: ` My daughter, Nascha, is taking lessons from Edurific for a few weeks. Her tutor is very dedicated and good with children. He encourages and supports her to improve her work and she looks forward to his classes.`,
      reviewerName: "Lisbon Ferrao",
      designation: "Vocal",
    },
    {
      desc: `I started right from the basics with Edurific and my Music Tutor has made sure that my approach is not limited and that I'm able to explore the instrument on my own and the whole journey was very effortless and beautiful.`,
      reviewerName: "Narayani Chawla",
      designation: "Guitar",
    },
    {
      desc: ` Edurific music tutor used to teach me for like one year.He is humble, cool and the best part is the independence he offered us as a student to
      discover us in music. I am so grateful to be his student and will always be... Thank you`,
      reviewerName: "Atithya Banerjee",
      designation: "Vocal",
    },
    {
      desc: `I'm learning music from Spandan sir from Edurific. He is a very good teacher, he taught me to feel and understand music which helped me to learn music differently. 
      He always gives me time for all my doubts and practice even in his busy schedule.`,
      reviewerName: "Supriyo Chakraborty",
      designation: "Guitar",
    },
  ];

  return (
    <Slider {...settings}>
      {TestimonilContent.map((val, i) => (
        <div
          className="item"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <p>{val.desc}</p>
          <h6 className="name">{val.reviewerName}</h6>
          <span className="desig">{val.designation}</span>
        </div>
      ))}
    </Slider>
  );
}
