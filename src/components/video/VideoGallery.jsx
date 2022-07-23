import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoGalleryContent = [
  {
    img: "img_84",
    text1: "Promoty",
    text2: "your Event",
    animationDelay: "",
  },
  {
    img: "img_85",
    text1: "Social Media",
    text2: "Promotion",
    animationDelay: "50",
  },
  {
    img: "img_86",
    text1: "Youtube Creator",
    text2: "Intro",
    animationDelay: "100",
  },
  {
    img: "img_87",
    text1: "Dancing",
    text2: "eople adv",
    animationDelay: "150",
  },
  {
    img: "img_88",
    text1: "Cartoon for",
    text2: "children",
    animationDelay: "50",
  },
  {
    img: "img_89",
    text1: "Music",
    text2: "Learning",
    animationDelay: "100",
  },
  {
    img: "img_90",
    text1: "Greeting",
    text2: "intro",
    animationDelay: "150",
  },
  {
    img: "img_91",
    text1: "Work",
    text2: "From Home",
    animationDelay: "200",
  },
];

const VideoGallery = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="row justify-content-center">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="qnwTVQlxs4g"
        onClose={() => setOpen(false)}
      />
      {VideoGalleryContent.map((val, i) => (
        <div
          className="col-xl-3 col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDelay}
          key={i}
        >
          <div className="block-style-twentyOne">
            <img src={`images/media/${val.img}.png`} alt="" className="w-100" />
            <div className="d-flex align-items-center justify-content-center flex-column video-button">
              <span>
                {val.text1} <br /> {val.text2}
              </span>
              <span
                className="icon d-flex align-items-center justify-content-center"
                onClick={() => setOpen(true)}
              >
                <img src="images/icon/118.svg" alt="" />
              </span>
            </div>
          </div>
          {/* /.block-style-twentyOne */}
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
