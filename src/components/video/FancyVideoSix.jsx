import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const FancyVideoSix = () => {
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
      <img src="images/media/img_111.png" alt="media" className="main-img" />
      <div
        className="ancybox video-button d-flex align-items-center justify-content-center"
        onClick={() => setOpen(true)}
      >
        <img src="images/icon/170.svg" alt="icon" />
      </div>
    </>
  );
};

export default FancyVideoSix;
