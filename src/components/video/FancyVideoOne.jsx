import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FancyVideoOne = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="qnwTVQlxs4g"
        onClose={() => setOpen(false)}
      />
      <img src="images/media/img_65.png" alt="media" className="main-img" />
      <div
        className="fancybox video-button d-flex align-items-center"
        onClick={() => setOpen(true)}
      >
        <img src="images/icon/66.svg" alt="icon" />
      </div>
    </>
  );
};

export default FancyVideoOne;
