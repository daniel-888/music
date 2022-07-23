import React, { useState } from "react";
import BrandTwo from "../brand/BrandTwo";
import Modal from "react-modal";
import HeaderPopupForm from "../form/HeaderPopupForm";

Modal.setAppElement("#root");

const HeroBannerFive = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="hero-banner-five">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-11 col-md-10 m-auto">
            <h1
              className="font-recoleta hero-heading"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Build your <span>Product</span> with Deski pro app.
            </h1>
            <p
              className="hero-sub-heading"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              Deski delivered blazing fast performance, striking word soludtion
            </p>
          </div>
        </div>
        {/* End .row */}

        <div className="d-sm-flex align-items-center justify-content-center button-group">
          <a
            href="#"
            className="d-flex align-items-center ios-button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <img src="images/icon/apple.svg" alt="brand" className="icon" />
            <div>
              <span>Download on the</span>
              <strong>App store</strong>
            </div>
          </a>
          <a
            href="#"
            className="d-flex align-items-center windows-button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <img src="images/icon/windows.svg" alt="icon" className="icon" />
            <div>
              <span>Get it on</span>
              <strong>Windows pc</strong>
            </div>
          </a>
        </div>
        {/* End button group */}

        <p
          className="sing-in-call"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          Different Platform? <span onClick={toggleModalOne}>Contact us</span>
        </p>
        {/* End sign-in-call */}
      </div>
      {/* End .container */}

      <div
        className="img-gallery"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="400"
      >
        <div className="container text-center">
          <div className="screen-container">
            <img
              src="images/assets/screen_01.png"
              alt="shape"
              className="main-screen"
            />
            <img
              src="images/assets/screen_01.1.png"
              alt="shape"
              className="shapes screen-one"
            />
            <img
              src="images/assets/screen_01.2.png"
              alt="shape"
              className="shapes screen-two"
            />
          </div>
          {/* /.screen-container */}
        </div>
      </div>
      {/* /.img-gallery */}

      <img
        src="images/shape/133.svg"
        alt="shape"
        className="shapes shape-one"
      />
      <img
        src="images/shape/134.svg"
        alt="shape"
        className="shapes shape-two"
      />
      <img
        src="images/shape/135.svg"
        alt="shape"
        className="shapes shape-three"
      />
      <img
        src="images/shape/136.svg"
        alt="shape"
        className="shapes shape-four"
      />

      <div className="partner-slider-two mt-110 md-mt-80">
        <div className="container">
          <p className="text-center">
            Over <span>32K+</span> software businesses growing with Deski.
          </p>
          <div className="partnerSliderTwo">
            <BrandTwo />
          </div>
          {/* End .partner slider two */}
        </div>
      </div>
      {/* /.partner-slider-two */}

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal  modal-contact-popup-one"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="box_inner ">
          <main className="main-body box_inner modal-content clearfix">
            <button className="close" onClick={toggleModalOne}>
              <img src="images/icon/close.svg" alt="close" />
            </button>
            {/* End close icon */}

            <div className="left-side">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="row">
                  <div className="col-xl-10 col-lg-8 m-auto">
                    <blockquote>
                      “I never dreamed about success. I worked for it.”
                    </blockquote>
                    <span className="bio">—Estée Lauder</span>
                  </div>
                </div>
                <img
                  src="images/assets/ils_18.svg"
                  alt=""
                  className="illustration mt-auto"
                />
              </div>
            </div>
            {/* /.left-side */}

            <div className="right-side">
              <h2 className="form-title">Contact us</h2>
              <HeaderPopupForm />
            </div>
            {/*  /.right-side */}
          </main>
          {/* /.main-body */}
        </div>
      </Modal>
      {/* End  Modal For Request a demo */}
    </div>
    // /.hero-banner-five
  );
};

export default HeroBannerFive;
