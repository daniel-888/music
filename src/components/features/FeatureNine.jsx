import React from "react";

const FeatureContent = [
  {
    icon: "mic",
    meta: "Vocals",
    subTitle: ` Help you child become the next singing sensation and a performance artist, by introducing them to fundamentals of Indian Classical, Carnatic & Western Music Genres.`,
  },
  {
    icon: "guitar",
    meta: "Guitar",
    subTitle: `Guitar is considered one of the best instruments as its Polyphonic, Versatile & Portable and best of all its Cool. Your child will learns to master this fantastic instrument from our top guitar maestros.`,
  },
  {
    icon: "disney",
    meta: "Disney",
    subTitle: `Most fun course with just 10 sessions, where your child learns to quickly sing the latest Disney songs and voice modulations to enhance their skills. This helps them in standing out from the rest of the kids of their age group.`,
  },
];

const FeatureNine = () => {
  return (
    <div className="row justify-content-center">
      {FeatureContent.map((val, i) => (
        <div
          className="col-lg-4 col-md-6"
          key={i}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="block-style-fourteen">
            <div className="illustration">
              <img src={`images/assets/${val.icon}.png`} alt="icon" />
            </div>
            <div className="title">{val.meta}</div>
            <p className="font-rubik">{val.subTitle}</p>
          </div>
          {/* /.block-style-fourteen */}
        </div>
      ))}
    </div>
    // /.row
  );
};

export default FeatureNine;
