import React from "react";

const WhyChooseContent = [
  {
    icon: "icon01",
    title: "Super Optimized",
    subTitle: `Our React file is super optimized & coded well`,
    animDelay: "0",
  },
  {
    icon: "icon02",
    title: "Modern & Pro Design",
    subTitle: `We make this design with following latest trend by expert.`,
    animDelay: "200",
  },
  {
    icon: "icon03",
    title: "Super Fast",
    subTitle: `Deski React is super fast beacause it's created with modern js Technology`,
    animDelay: "400",
  },
];

const WhyChooseContentTwo = () => {
  return (
    <>
      <div className="row">
        {WhyChooseContent.map((val, i) => (
          <div
            className="col-lg-4 col-md-6"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay={val.animDelay}
          >
            <div className="single-block">
              <div className="icon d-flex align-items-end">
                <img src={`images/preview/${val.icon}.png`} alt="feature" />
              </div>
              <h5>
                <span>{val.title}</span>
              </h5>
              <p>{val.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default WhyChooseContentTwo;
