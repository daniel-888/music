import React from "react";

const UsefulFeatures = [
  {
    icon: "react",
    title: `React JS`,
    animDelay: "",
  },
  {
    icon: "logo02",
    title: `Bootstrap CSS`,
    animDelay: "200",
  },
  {
    icon: "logo03",
    title: `Dynamic & Reusuable Copmponents `,
    animDelay: "400",
  },
  {
    icon: "seo",
    title: ` Search Engine (SEO)
    Compatible`,
    animDelay: "600",
  },
  {
    icon: "logo05",
    title: `Well Documented`,
    animDelay: "",
  },
  {
    icon: "logo01",
    title: `Google unlimited 
  fonts`,
    animDelay: "200",
  },
  {
    icon: "logo07",
    title: `Fully Responsive`,
    animDelay: "400",
  },
  {
    icon: "logo08",
    title: `Transition Effects
    Ready`,
    animDelay: "600",
  },
];

const Features = () => {
  return (
    <>
      <div className="row justify-content-center">
        {UsefulFeatures.map((val, i) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 d-flex mt-30"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.animDelay}
          >
            <div className="feature-block">
              <div className="icon d-flex justify-content-center align-items-end">
                <img src={`images/preview/${val.icon}.png`} alt="feature" />
              </div>
              <p className="font-rubik">{val.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
