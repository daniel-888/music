import React from "react";

const FeatureContent = [
  {
    icon: "mic",
    meta: "Vocals",
    subTitle: `Start your child's musical journey of being a singer and a dynamic artist with fundamentals of Indian classical, Carnatic and Western music genres.`,
  },
  {
    icon: "guitar",
    meta: "Guitar",
    subTitle: `Mastering guitar with the best faculty in the country, your child learns the building blocks with popular songs.`,
  },
  {
    icon: "disney",
    meta: "Disney",
    subTitle: `One of the most fun and shortest courses with 10 lessons, where your child learns to sing the latest disney songs and voice modulations to enhance their performance skills.
    `,
  },
];

const FeaturesEight = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-thirteen">
            <div className="icon">
              <img src={`images/icon/${val.icon}.png`} alt="icon" />
            </div>
            <div className="title font-rubik">{val.meta}</div>
            <p className="features">{val.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesEight;
