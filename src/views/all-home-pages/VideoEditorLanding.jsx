import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DocEditorTabs from "../../components/block-slider/DocEditorTabs";
import FancyFeatureNinteen from "../../components/features/FancyFeatureNinteen";
import HeaderLandingEditor from "../../components/header/landing/HeaderLandingEditor";
import HeroBannerEight from "../../components/hero-banner/HeroBannerEight";
import TestimonialSeven from "../../components/testimonial/TestimonialSeven";
import FooterSeven from "../../components/footer/FooterSeven";
import CopyRightThree from "../../components/footer/CopyRightThree";
import FacnyVideoTwo from "../../components/video/FacnyVideoTwo";
import FacnyVideoThree from "../../components/video/FacnyVideoThree";
import VideoGallery from "../../components/video/VideoGallery";

const VideoEditorLanding = () => {
  // For header select menu
  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);
  return (
    <div className="main-page-wrapper font-gordita">
      <Helmet>
        <title>
        Music Classes by Edurific
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingEditor />
      {/* End Header Landing Editor */}

      {/* 	=============================================
				Theme Hero Banner
			==============================================  */}
      <HeroBannerEight />

      {/* 		=============================================
				Fancy Feature Eighteen
			==============================================  */}
      <div className="fancy-feature-eighteen mt-130 md-mt-80" id="feature">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 m-auto">
              <div
                className="title-style-eight text-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h2>
                  Build with <br /> 800+ Stunning Effects
                </h2>
                <p>
                  Rotate, merge, trim, split, crop and flip videos with a modern
                  & simple ui
                </p>
              </div>
            </div>
          </div>

          {/* Nav tabs */}
        </div>
        {/* End .container */}
        <DocEditorTabs />

        <img src="images/shape/175.svg" alt="" className="shapes shape-right" />
        <img src="images/shape/176.svg" alt="" className="shapes shape-left" />
      </div>
      {/* /.fancy-feature-eighteen */}

      {/* 	=============================================
				Fancy Feature Nineteen
			==============================================  */}
      <div className="fancy-feature-nineteen pt-180 md-pt-100" id="effect">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-9 col-lg-11 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-eight text-center mb-80 md-mb-40">
                <h2>Unleash Creativity with Pro Effects</h2>
                <p>
                  Explore advanced video editing features that only
                  professionals have access to!
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}
          <FancyFeatureNinteen />
        </div>
      </div>
      {/* /.fancy-feature-nineteen */}

      {/* 	=============================================
				Fancy Feature Twenty
			==============================================  */}
      <div className="fancy-feature-twenty mt-225 md-mt-150">
        <div className="container">
          <div className="block-style-twenty">
            <FacnyVideoTwo />
          </div>
          {/* /.block-style-twenty */}

          <div className="block-style-twenty mt-170 md-mt-120">
            <FacnyVideoThree />
          </div>
          {/* /.block-style-twenty */}
        </div>
      </div>
      {/* /.fancy-feature-twenty */}

      {/* 	=====================================================
				Fancy Feature Twenty One
			===================================================== */}
      <div className="fancy-feature-twentyOne mt-200 md-mt-100" id="template">
        <div className="container">
          <div
            className="title-style-eight text-center mb-80 md-mb-30"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h2>Ready Stunning Templates</h2>
            <p>Quick and easy to customize. No experience required.</p>
          </div>
        </div>

        <div className="lg-container">
          <div className="container">
            <VideoGallery />

            <div
              className="text-center mt-70"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <a href="#" className="theme-btn-nine">
                Start Building
              </a>
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </div>
      {/* /.fancy-feature-twentyOne */}

      {/* =====================================================
				Client Feedback Slider Six
			===================================================== */}
      <div
        className="client-feedback-slider-six pt-170 md-pt-120"
        id="feedback"
      >
        <div className="inner-container">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-7 col-lg-9 m-auto"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="title-style-eight text-center">
                  <h6>FEEDBACK</h6>
                  <h2>Trusted by millions of creators.</h2>
                </div>
              </div>
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
          <div className="clientSliderSix">
            <TestimonialSeven />
          </div>
        </div>
        {/* /.inner-container */}
      </div>
      {/* /.client-feedback-slider-six */}

      {/* 	=====================================================
				Fancy Short Banner Nine
			===================================================== */}
      <div className="fancy-short-banner-nine mt-170 md-mt-80">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-8 col-lg-11 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-seven text-center">
                <h2>200k+ Customers have our deski.Try it now!</h2>
                <p>Try it risk free — we don’t charge cancellation fees.</p>
              </div>
              {/*  /.title-style-six */}
            </div>
          </div>
          {/* End .row */}
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
            <div
              className={
                click1 ? "dropdown download-btn show" : "dropdown download-btn"
              }
            >
              <button
                className="dropdown-toggle"
                onClick={handleClick1}
                type="button"
              >
                Get Deski app
              </button>
              <div className={click1 ? "dropdown-menu  show" : "dropdown-menu"}>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="#"
                  onClick={handleClick1}
                >
                  <img src="images/icon/103.svg" alt="icon" />
                  <span>IOS & Android</span>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="#"
                  onClick={handleClick1}
                >
                  <img src="images/icon/104.svg" alt="icon" />
                  <span>Mac & Windows</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*  /.container */}
        <img
          src="images/shape/177.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/178.svg"
          alt="shape"
          className="shapes shape-two"
        />
      </div>
      {/*  /.fancy-short-banner-nen */}

      {/* =====================================================
				Footer Style Seven
			===================================================== */}
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">
          <div className="container">
            <FooterSeven />
          </div>

          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default VideoEditorLanding;
