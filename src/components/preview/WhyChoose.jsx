import React from "react";

const WhyChooseContent = [
  {
    icon: "icon01",
    title: "Quality Support",
    subTitle: ` We,ve supprot system that don’t make you wait for get instant
    support.`,
    animDelay: "0",
  },
  {
    icon: "icon02",
    title: "Well Documented",
    subTitle: `Our file is well documented with easy instructions`,
    animDelay: "200",
  },
  {
    icon: "icon03",
    title: "Clean Coding",
    subTitle: `Deski React code maximum dynamic and Clean Coding`,
    animDelay: "400",
  },
];

const WhyChoose = () => {
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

export default WhyChoose;
