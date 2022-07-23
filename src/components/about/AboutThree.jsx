import React from "react";

const AboutThree = () => {
  return (
    <div className="row">
      <div
        className="col-lg-6 order-lg-last"
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <div className="text-wrapper pl-3">
          <div className="title-style-three mb-35 md-mb-20">
            <h6>Certified by trustpilot</h6>
            <h2>
              <span>
                Certified and trusted{" "}
                <img src="images/shape/line-shape-7.svg" alt="shape" />
              </span>
              support portal.
            </h2>
          </div>
          {/*  /.title-style-two */}
          <p>
            Whether you're a theatre, stadium, intimate music venue, church,
            gala or concert hall, our seating chart tooi accurately represent
            your venue and seating layout.
          </p>
          <p className="mt-30">
            It's easy to incorporate socialy distanced spaces, add tables, edit
            the numbering or have.
          </p>
        </div>
      </div>
      <div className="col-lg-6 order-lg-first">
        <div className="img-gallery">
          <img
            src="images/media/img_38.png"
            alt="media"
            data-aos="fade-right"
            data-aos-duration="1200"
          />
          <img
            src="images/media/img_36.png"
            alt="media"
            className="overlay-img"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="100"
          />
          <img
            src="images/shape/49.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/54.svg"
            alt="shape"
            className="shapes shape-three"
          />
        </div>
        {/* /.img-gallery */}
      </div>
    </div>
  );
};

export default AboutThree;
