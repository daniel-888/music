import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FancyTextBlock22 from "../../components/fancy-text-block/FancyTextBlock22";
import HeaderLandingNoteTaking from "../../components/header/landing/HeaderLandingNoteTaking";
import HeroBannerSeven from "../../components/hero-banner/HeroBannerSeven";
import PricingSix from "../../components/pricing/pricing-six/Pricing";
import TestimonialSix from "../../components/testimonial/TestimonialSix";
import CopyRightThree from "../../components/footer/CopyRightThree";
import FooterSeven from "../../components/footer/FooterSeven";
import FancyFeatureSeventeen from "../../components/features/FancyFeatureSeventeen";
import DocAsTabs from "../../components/block-slider/DocAsTabs";

const NoteTakingLanding = () => {
  // For header select menu
  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);
  return (
    <div className="main-page-wrapper font-gordita">
      <Helmet>
        <title>
          {" "}
          Music Classes by Edurific
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingNoteTaking />
      {/* End Header Landing Note Talking */}

      {/* 	=============================================
				Theme Hero Banner
			==============================================  */}
      <HeroBannerSeven />

      {/* =============================================
				Fancy Feature Fifteen
			==============================================  */}
      <div className="fancy-feature-fifteen pt-120 md-pt-80" id="product">
        <div className="bg-wrapper">
          <div className="container">
            <div className="sldier-wrapper">
              <DocAsTabs />
            </div>
            {/* /.sldier-wrapper */}
          </div>
          <img
            src="images/shape/168.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/169.svg"
            alt="shape"
            className="shapes shape-two"
          />
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/*  /.fancy-feature-fifteen */}

      {/* 	=============================================
				Fancy Feature Sixteen
			==============================================  */}
      <div className="fancy-feature-sixteen pt-200 md-pt-100" id="features">
        <div className="container">
          <div className="block-style-eighteen">
            <div className="row align-items-center">
              <div
                className="col-lg-5"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>App Integration</h6>
                  <h3 className="title">
                    Connect with <span>software.</span>
                  </h3>
                  <p>
                    Share content across apps. Deski connects with the
                    productivity tools you already use, so you can work your
                    way.
                  </p>
                  <Link
                    to="/product-customer-support"
                    className="d-flex align-items-center learn-more"
                  >
                    <span>Learn More</span>
                    <img src="images/icon/93.svg" alt="screen" />
                  </Link>
                </div>
                {/*  /.text-wrapper */}
              </div>
              <div
                className="col-lg-7"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div
                  className="
                    screen-holder-one
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <div
                    className="
                      round-bg
                      big_g
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                    style={{ width: "193px", height: "193px" }}
                  >
                    <img src="images/logo/logo-26.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-one
                    "
                    style={{ width: "65px", height: "65px" }}
                  >
                    <img src="images/logo/logo-27.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-two
                    "
                    style={{ width: "105px", height: "105px" }}
                  >
                    <img src="images/logo/logo-28.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-three
                    "
                    style={{ width: "81px", height: "81px" }}
                  >
                    <img src="images/logo/logo-29.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-four
                    "
                    style={{ width: "148px", height: "148px" }}
                  >
                    <img src="images/logo/logo-30.png" alt="logo" />
                  </div>
                  <div
                    className="
                      round-bg
                      d-flex
                      align-items-center
                      justify-content-center
                      shapes
                      logo-five
                    "
                    style={{ width: "148px", height: "148px" }}
                  >
                    <img src="images/logo/logo-31.png" alt="logo" />
                  </div>
                  <img
                    src="images/shape/170.svg"
                    alt=""
                    className="shapes shape-one"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /.block-style-eighteen */}

          <div className="block-style-eighteen mt-200 pt-50 md-mt-80">
            <div className="row align-items-center">
              <div
                className="col-lg-5 order-lg-last"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>Scanning & Doc</h6>
                  <h3 className="title">
                    Web doc <br />
                    file <span>Scanning.</span>
                  </h3>
                  <p>
                    Go paperless. Back up important documents to all your
                    devices, and keep the information not the clutter.
                  </p>
                  <Link
                    to="/product-customer-support"
                    className="d-flex align-items-center learn-more"
                  >
                    <span>Learn More</span>
                    <img src="images/icon/93.svg" alt="screen" />
                  </Link>
                </div>
                {/* /.text-wrapper */}
              </div>
              <div
                className="col-lg-7 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="screen-holder-two">
                  <img src="images/assets/screen_12.png" alt="screen" />
                  <img
                    src="images/assets/screen_13.png"
                    alt=""
                    className="shapes screen-one"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /.block-style-eighteen */}

          <div className="block-style-eighteen mt-200 pt-50 md-mt-80">
            <div className="row align-items-center">
              <div
                className="col-lg-5"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>Note & Docs</h6>
                  <h3 className="title">
                    <span>Clipper</span> & Rich notes
                  </h3>
                  <p>
                    Save web pages (without the ads) and mark them up with
                    arrows, highlights, and text to make them more useful.
                  </p>
                  <Link
                    to="/product-customer-support"
                    className="d-flex align-items-center learn-more"
                  >
                    <span>Learn More</span>
                    <img src="images/icon/93.svg" alt="screen" />
                  </Link>
                </div>
                {/* /.text-wrapper */}
              </div>
              <div
                className="col-lg-7"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div
                  className="
                    screen-holder-three
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <img src="images/assets/screen_14.png" alt="screen" />
                </div>
              </div>
            </div>
          </div>
          {/* /.block-style-eighteen */}
        </div>
      </div>
      {/*  /.fancy-feature-sixteen */}

      {/* =====================================================
				Fancy Text Block Twenty Two
			===================================================== */}
      <div
        className="fancy-text-block-twentyTwo lg-container pt-200 md-pt-120"
        id="why_us"
      >
        <div className="container">
          <FancyTextBlock22 />
        </div>
      </div>
      {/* /.fancy-text-block-twentyTwo */}

      {/* =====================================================
				Fancy Feature Seventeen
			===================================================== */}
      <div className="fancy-feature-seventeen mt-150 md-mt-90" id="product">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <FancyFeatureSeventeen />
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-feature-seventeen */}

      {/* 	=====================================================
				Pricing Section Six
			===================================================== */}
      <div className="pricing-section-six pt-200 md-pt-100" id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div className="title-style-seven text-center">
                <h2>
                  Solo, Agency or Team? We’ve got you <span>covered.</span>
                </h2>
              </div>
              {/* /.title-style-six */}
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <PricingSix />
      </div>
      {/* /.pricing-section-six */}

      {/* =====================================================
				Client Feedback Slider Six
			===================================================== */}
      <div
        className="client-feedback-slider-six pt-200 md-pt-120"
        id="feedback"
      >
        <div className="inner-container">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <img src="images/icon/100.svg" alt="icon" className="m-auto" />
                <div className="title-style-seven text-center mt-20">
                  <h2>
                    <span>Client</span> love us & we love them
                  </h2>
                  <p>Kind words from our deski Clients.</p>
                </div>
                {/* /.title-style-six  */}
              </div>
            </div>
          </div>
          <div className="clientSliderSix">
            <TestimonialSix />
          </div>
        </div>
        {/* /.inner-container */}
      </div>
      {/* /.client-feedback-slider-six */}

      {/* 	=====================================================
				Fancy Short Banner Eight
			===================================================== */}
      <div className="fancy-short-banner-eight mt-170 md-mt-80">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-8 col-lg-11 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-seven text-center">
                <h2>
                  <span>200k+</span> Customers have our deski.Try it now!
                </h2>
                <p>Try it risk free — we don’t charge cancellation fees.</p>
              </div>
              {/*  /.title-style-six */}
            </div>
          </div>
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
          src="images/shape/171.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/172.svg"
          alt="shape"
          className="shapes shape-two"
        />
      </div>
      {/*  /.fancy-short-banner-eight */}

      {/* 			=====================================================
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

export default NoteTakingLanding;
