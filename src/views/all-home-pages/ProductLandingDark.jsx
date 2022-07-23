import React from "react";
import { Helmet } from "react-helmet";
import HeaderLandingDark from "../../components/header/landing/HeaderLandingDark";
import HeroBannerSix from "../../components/hero-banner/HeroBannerSix";
import DocSlickAsNavTwo from "../../components/block-slider/DocSlickAsNavTwo";
import FancyFeatureTwelve from "../../components/features/FancyFeatureTwelve";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonial from "../../components/testimonial/TestimonialFive";
import PricingFive from "../../components/pricing/PricingFive";
import FooterSix from "../../components/footer/FooterSix";
import Tilt from "react-parallax-tilt";

const ProductLandingDark = () => {
  return (
    <div className="main-page-wrapper font-gordita dark-style lg-container p0">
      <Helmet>
        <title>
          {" "}
          Music Classes by Edurific
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingDark />
      {/* End HeaderLanding */}

      {/*=============================================
			Theme Hero Banner
		  ==============================================  */}
      <div className="hero-banner-six" id="home">
        <div className="illustration-content">
          <img
            src="images/shape/144.svg"
            alt="shape"
            className="main-img ml-auto"
          />
          <img
            src="images/assets/screen_05.png"
            alt="screen"
            className="screen-one"
          />
          <div className="screen-two">
            <img
              src="images/assets/screen_06.png"
              alt="screen"
              className="ml-auto"
            />
          </div>
          <img
            src="images/shape/145.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/146.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <img
            src="images/shape/147.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <img
            src="images/shape/148.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <img
            src="images/shape/149.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <img
            src="images/shape/150.png"
            alt="shape"
            className="shapes shape-six"
          />
          <div className="shapes oval-one"></div>
          <div className="shapes oval-two"></div>
          <div className="shapes oval-three"></div>
        </div>
        {/* End .illustration-content */}

        <div className="container">
          <HeroBannerSix />
        </div>
        {/* End .container */}
      </div>
      {/* /.hero-banner-six */}

      {/*=============================================
		   Fancy Feature Twelve
	    ==============================================  */}
      <div className="fancy-feature-twelve pt-250 md-pt-50" id="about">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-10 col-md-8 m-auto">
                <div className="title-style-six text-center">
                  <h2>
                    Check why you <span>Should</span> Choose us
                  </h2>
                </div>
                {/* /.title-style-six */}
              </div>
            </div>
            {/* End .row */}
            <FancyFeatureTwelve />
          </div>
        </div>
        {/* /.bg-wrapper */}
        <img src="images/shape/151.svg" alt="" className="shapes shape-one" />
      </div>
      {/*  /.fancy-feature-twelve */}

      {/*=============================================
			Fancy Feature Thirteen
		  ==============================================  */}
      <div className="fancy-feature-thirteen pt-250 md-pt-110 " id="features">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-11 col-md-10 m-auto">
              <div className="title-style-six text-center">
                <h2>
                  Bring all Team <span>Managment</span> & task togather
                </h2>
                <p className="text-xs">
                  Lorem ipsum dolor on adipisci elit io sed do eiusmod tempor
                  dsu elit
                </p>
              </div>
              {/* /.title-style-six */}
            </div>
          </div>

          <div className="sldier-wrapper  mt-30 md-mt-50">
            <DocSlickAsNavTwo />
          </div>
          {/* /.sldier-wrapper  */}
        </div>
      </div>
      {/* /.fancy-feature-thirteen */}

      {/*=====================================================
				Fancy Feature Fourteen
			===================================================== */}
      <div className="fancy-feature-fourteen mt-250 pt-80 md-mt-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="title-style-six">
                <h6 style={{ color: "#FF2759", fontSize: "15px" }}>
                  Integrategration
                </h6>
                <h2>
                  Connect App <br /> with the <span>Software</span> you use.
                </h2>
                <p className="text-xs pr-5 mr-5">
                  Lorem ipsum dolor on adipisci elit io quis sed do eiusmod tem.
                </p>
              </div>
              {/*  /.title-style-six */}
            </div>

            <div className="col-lg-5 ml-auto">
              <div className="right-side md-mt-60">
                <div className="row">
                  <div className="col-md-6">
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src="images/logo/logo-17.svg" alt="logo" />
                      </div>
                    </Tilt>
                    <Tilt>
                      <div className="logo-meta d-flex align-items-center justify-content-center ">
                        <img src="images/logo/logo-18.svg" alt="logo" />
                      </div>
                    </Tilt>
                  </div>
                  {/* End .col */}

                  <div className="col-md-6">
                    <Tilt>
                      <div className="logo-meta mt-40 d-flex align-items-center justify-content-center ">
                        <img src="images/logo/logo-19.svg" alt="logo" />
                      </div>
                    </Tilt>
                    <Tilt>
                      <div className="logo-meta lg d-flex align-items-center justify-content-center ">
                        <img src="images/logo/logo-20.svg" alt="logo" />
                        <img
                          src="images/shape/154.svg"
                          alt="shape"
                          className="shapes shape-one"
                        />
                      </div>
                    </Tilt>
                  </div>
                  {/* End .col */}
                </div>
              </div>
              {/* /.right-side */}
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-feature-fourteen */}

      {/*=====================================================
				Fancy Portfolio One
			===================================================== */}
      <div className="fancy-portfolio-one pt-180 md-pt-100" id="product">
        <div className="container">
          <div className="title-style-six">
            <h2>
              Our <span>Portfolio</span>
            </h2>
          </div>
          {/*  /.title-style-six */}
        </div>

        <div className="portfolioSliderOne arrow-top-right pt-120 md-pt-70">
          <Portfolio />
        </div>
      </div>
      {/* /.fancy-portfolio-one */}

      {/*=====================================================
			Client Feedback Slider Five
			===================================================== */}
      <div
        className=" client-feedback-slider-five mt-200 md-mt-80"
        id="feedback"
      >
        <div className="client-feedback-slider-fiv">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-10 col-md-9 m-auto">
                <img
                  src="images/icon/84.svg"
                  alt="icon"
                  className="icon m-auto"
                />
                <div className="title-style-six text-center mt-25">
                  <h2>
                    Check what’s <span>Customer </span>say about us.
                  </h2>
                </div>
                {/*  /.title-style-six */}
              </div>
            </div>
            {/* End .row */}

            <div className="row">
              <div className="col-xl-7 col-lg-10 m-auto">
                <div className="custom-icon-slick-arrow clientSliderFive mt-80 md-mt-50">
                  <Testimonial />
                </div>
                {/* /.clientSliderThree */}
                <img
                  src="images/shape/156.svg"
                  alt="shape"
                  className="shapes shape-one"
                />
                <img
                  src="images/shape/157.svg"
                  alt="shape"
                  className="shapes shape-two"
                />
                <img
                  src="images/shape/158.svg"
                  alt="shape"
                  className="shapes shape-three"
                />
              </div>
            </div>
          </div>
          {/* /.container */}
          <div className="circle-area">
            <img src="images/shape/155.svg" alt="shape" className="main-img" />
          </div>
        </div>
      </div>
      {/* /.client-feedback-slider-three */}

      {/* 	=====================================================
				Pricing Section Five
			===================================================== */}
      <div
        className="pricing-section-five  pt-250 md-mt-150 sm-mt-80 md-pt-80"
        id="pricing"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-last">
              <div className="title-style-six pl-5 md-p0">
                <h6 style={{ fontSize: "15px" }}>Our Pricing</h6>
                <h2>
                  Choose your <span>Product.</span>
                </h2>
                <p className="text-xs">
                  Lorem ipsum dolor on adipisci elit sed do eiusmod liu.
                </p>
              </div>
              {/* /.title-style-six */}
            </div>
            {/* End .col */}

            <div className="col-lg-7">
              <div className="pricing-table-area-five md-mt-60">
                <img
                  src="images/icon/88.png"
                  alt="icon"
                  className="shapes shape-one"
                />
                <img
                  src="images/shape/160.png"
                  alt="shape"
                  className="shapes shape-two"
                />
                <PricingFive />
              </div>
              {/* /.pricing-table-area-five */}
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
      </div>
      {/* /.pricing-section-five */}

      {/*=====================================================
					Fancy Short Banner Seven
				===================================================== */}
      <div className="fancy-short-banner-seven mt-250 md-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-11 m-auto">
              <div className="title-style-six text-center">
                <h2>
                  love our product? <span>Save $20</span> by grab it today.
                </h2>
              </div>
              {/* /.title-style-six */}
              <a
                href="#"
                className="d-flex align-items-center ios-button gr-bg-one hover-reverse-gr-bg-one"
              >
                <img src="images/icon/apple.svg" alt="icon" className="icon" />
                <div>
                  <span>Download on the</span>
                  <strong>App store</strong>
                </div>
              </a>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
          <Tilt>
            <div className="screen-meta">
              <img
                src="images/assets/screen_10.png"
                alt="screen"
                className="m-auto"
              />
              <img
                src="images/shape/165.svg"
                alt="screen"
                className="shapes shape-four"
              />
              <img
                src="images/shape/166.png"
                alt="screen"
                className="shapes shape-five"
              />
            </div>
          </Tilt>
        </div>
        {/* /.container */}

        <img
          src="images/shape/162.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/163.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/shape/164.svg"
          alt="shape"
          className="shapes shape-three"
        />
      </div>
      {/* /.fancy-short-banner-seven */}

      {/*=====================================================
					Footer Style Six
				===================================================== */}
      <footer className="theme-footer-six">
        <div className="inner-container">
          <div className="container">
            <FooterSix />
            <p className="copyright">
              {" "}
              Copyright @{new Date().getFullYear()}{" "}
              <a
                href="https://themeforest.net/user/ib-themes/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                ib-themes
              </a>{" "}
              inc.
            </p>
          </div>
          <img
            src="images/shape/167.png"
            alt="shape"
            className="shapes shape-one"
          />
        </div>
        {/*  /.inner-container */}
      </footer>
      {/* /.theme-footer-six */}
    </div>
  );
};

export default ProductLandingDark;
