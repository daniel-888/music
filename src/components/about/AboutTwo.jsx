import React from "react";
import { Link } from "react-router-dom";

const AboutTwo = () => {
  return (
    <div className="row">
      <div
        className="col-lg-5 col-md-6 col-sm-10 m-auto"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <div className="img-holder">
          <img src="images/media/img_19.png" alt="media" />
          <img
            src="images/shape/34.svg"
            alt="shape"
            className="shapes shape-six"
          />
        </div>
        {/* img-holder */}
      </div>
      {/* End .col */}

      <div
        className="col-xl-6 col-lg-7 ml-auto"
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <div className="quote-wrapper pt-60">
          <img src="images/icon/26.svg" alt="icon" className="icon" />
          <blockquote className="font-rubik">
            Deski combines excellent live chat, ticketing and automation that
            allow us to provide quality.
          </blockquote>
          <h6>
            Bostami Hasan <span>CEO & Founder deksi</span>
          </h6>
          <Link to="/about-cs" className="theme-btn-two mt-45 md-mt-30">
            {" "}
            Learn More
          </Link>
        </div>
        {/* /.quote-wrapper */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default AboutTwo;
