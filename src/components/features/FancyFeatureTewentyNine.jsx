import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

const FancyFeatureTewentNine = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />

      <div className="row">
        <div className="col-lg-6 mt-40" data-aos="fade-up">
          <div
            className="block-style-twentyNine"
            style={{ background: "#623A75" }}
          >
            <div className="logo">
              <img src="images/logo/logo-53.png" alt="brand" />
            </div>
            <div
              className="fancybox video-icon tran3s"
              onClick={() => setOpen(true)}
            >
              <img src="images/icon/152.svg" alt="icon" />
            </div>
            <h3>
              <Link to="/blog-details">
                Seattle Opera Simplifies Performance Planning with deski
                eSignature.
              </Link>
            </h3>
            <Link
              className="read-more-btn d-flex justify-content-between align-items-center w-100"
              to="/blog-details"
            >
              <span>Continue Reading</span>
              <img src="images/icon/153.svg" alt="icon" />
            </Link>
          </div>
          {/* /.block-style-twentyNine */}
        </div>
        {/* End .col */}

        <div className="col-lg-6 mt-40" data-aos="fade-up" data-aos-delay="100">
          <div
            className="block-style-twentyNine"
            style={{ background: "#314B7D" }}
          >
            <div className="logo">
              <img src="images/logo/logo-54.png" alt="brand" />
            </div>
            <div
              className="fancybox video-icon tran3s"
              onClick={() => setOpen(true)}
            >
              <img src="images/icon/152.svg" alt="icon" />
            </div>
            <h3>
              <Link to="/blog-details">
                How DocuSign CLM Helps Celonis Scale Its Global Business
              </Link>
            </h3>
            <Link
              className="read-more-btn d-flex justify-content-between align-items-center w-100"
              to="/blog-details"
            >
              <span>Continue Reading</span>
              <img src="images/icon/153.svg" alt="icon" />
            </Link>
          </div>
          {/* /.block-style-twentyNine */}
        </div>
        {/* End .col */}

        <div className="col-lg-6 mt-40" data-aos="fade-up">
          <div
            className="block-style-twentyNine"
            style={{ background: "#2B4E56" }}
          >
            <div className="logo">
              <img src="images/logo/logo-55.png" alt="brand" />
            </div>
            <div
              className="fancybox video-icon tran3s"
              onClick={() => setOpen(true)}
            >
              <img src="images/icon/152.svg" alt="icon" />
            </div>
            <h3>
              <Link to="/blog-details">
                Sunrun makes solar contracts convenient with deski and
                Salesforce
              </Link>
            </h3>
            <Link
              className="read-more-btn d-flex justify-content-between align-items-center w-100"
              to="/blog-details"
            >
              <span>Continue Reading</span>
              <img src="images/icon/153.svg" alt="icon" />
            </Link>
          </div>
          {/* /.block-style-twentyNine */}
        </div>
        {/* End .col */}

        <div className="col-lg-6 mt-40" data-aos="fade-up" data-aos-delay="100">
          <div
            className="block-style-twentyNine"
            style={{ background: "#7A4040" }}
          >
            <div className="logo">
              <img src="images/logo/logo-56.png" alt="brand" />
            </div>
            <div
              className="fancybox video-icon tran3s"
              onClick={() => setOpen(true)}
            >
              <img src="images/icon/152.svg" alt="icon" />
            </div>
            <h3>
              <Link to="/blog-details">
                McCloskey Motors builds a touchless car sale process with
                Design.
              </Link>
            </h3>
            <Link
              className="read-more-btn d-flex justify-content-between align-items-center w-100"
              to="/blog-details"
            >
              <span>Continue Reading</span>
              <img src="images/icon/153.svg" alt="icon" />
            </Link>
          </div>
          {/* /.block-style-twentyNine */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default FancyFeatureTewentNine;
