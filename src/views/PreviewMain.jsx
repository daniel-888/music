import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../components/header/HeaderFour";
import HeroBannerFour from "../components/hero-banner/HeroBannerFour";
import About from "../components/about/About";
import FeatureNine from "../components/features/FeatureNine";
import Faq from "../components/faq/Faq";
import Pricing from "../components/pricing/pricing-four/Pricing";
import TestimonialThree from "../components/testimonial/TestimonialThree";
import FaqFour from "../components/faq/FaqFour";
import FooterFour from "../components/footer/FooterFour";
import CallToActionFive from "../components/call-to-action/CallToActionFive";

const EventOrganizer = () => {
  return (
    <div className="main-page-wrapper p0" id="home">
     
      {/* End Page SEO Content */}

      <Header />
      {/* End HeaderFour */}

      <HeroBannerFour />
      {/* End Hero Banner Four */}
      <div className="fancy-feature-nine">
        <img
          src="images/shape/107.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/108.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/shape/109.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/shape/110.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <img
          src="images/shape/111.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <img
          src="images/shape/112.svg"
          alt="shape"
          className="shapes shape-six"
        />

        <div className="container">
          <div className="title-style-five text-center mb-60 md-mb-30">
           
            <h2>
              <span>3 simple & easy courses to Learn.</span>
            </h2>
          </div>
          {/* End title */}

          <FeatureNine />
        </div>
      </div>
      {/* /.fancy-feature-nine */}


      {/* 
     =============================================
				Fancy Text Block
		============================================== */}
      <div className="fancy-text-block-nineteen mt-150 mb-10 md-mt-150 md-mb-100">
        <div className="container" id="about">
          <About />
        </div>
      </div>
      {/* End  .fancy-text-block-nineteen*/}

     

     
   {/*  =============================================
				Pricing Section Three
		============================================== */}
      <div className="pricing-section-three mt-150 mb-150 md-mt-70 md-mb-70"  id="packages">
        <img
          src="images/shape/107.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/108.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/shape/109.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/shape/110.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <img
          src="images/shape/111.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <img
          src="images/shape/112.svg"
          alt="shape"
          className="shapes shape-six"
        />

        <div className="container">
          <div className="row">
            <div className="col-xl-10  m-auto">
            <div className="title-style-five text-center">
            <h6>Curriculum & Pricing</h6>
            <h2>
              <span>Packages</span>
            </h2>
          </div>
              {/* /.title-style-six */}
            </div>
          </div>
        </div>
        {/* End .container */}

        <Pricing />
        {/* ./container */}
      </div>
      {/* /.pricing-section-three */}
      
      {/* 
     =============================================
				Client Feedback Slider
		============================================== */}
      <div className="client-feedback-slider-three mb-250 " id="testimonails">
        <div className="container">
          <div className="title-style-five text-center mb-80 md-mb-50">
            <div className="row">
              <div className="col-lg-10 col-md-9 m-auto">
                <h2 data-aos="fade-up" data-aos-duration="1200">
                  <span>Why Kids Love Edurific </span>
                </h2>
              </div>
            </div>
          </div>
          {/* End title */}
          <div className="row">
            <div className="col-xl-10 col-lg-9 m-auto">
              <div className="testimonial-slider-wrapper">
                <div className="clientSliderThree">
                  <TestimonialThree />
                </div>
              </div>
              {/* /.testimonial-slider-wrapper */}
            </div>
          </div>
        </div>
        {/* /.container */}
        <img
          src="images/media/5.png"
          alt="media"
          className="shapes shape_1"
        />
        <img
          src="images/media/4.png"
          alt="media"
          className="shapes shape_2"
        />
        <img
          src="images/media/6.png"
          alt="media"
          className="shapes shape_3"
        />
        <img
          src="images/media/3.png"
          alt="media"
          className="shapes shape_4"
        />
        <img
          src="images/media/1.png"
          alt="media"
          className="shapes shape_5"
        />
        <img
          src="images/media/2.png"
          alt="media"
          className="shapes shape_6"
        />
      </div>
      {/* /.client-feedback-slider-three */}

      <div className="faq-section-four"id="faq">
        <img
          src="images/shape/120.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/121.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="container">
          <div className="title-style-five text-center mb-80 md-mb-60">
            <h2>
              <span>Have Doubts?</span> Let's clear them!
            </h2>
          </div>

          <div className="row">
            <div className="col-xl-10 col-lg-10 m-auto">
              <FaqFour />
            </div>
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* End Question and answer */}

     

      {/* 
     =============================================
			Footer Four
		============================================== */}
      <footer className="theme-footer-four">
        <div className="top-footer">
          <div className="container">
            <FooterFour />
          </div>
          {/* /.container */}
        </div>

        <div className="container">
          <div className="bottom-footer-content">
            <p>
              <br/>
              Copyright © {new Date().getFullYear()}{" "}
              <a
                href="https://edurific.com"
                target="_blank"
                rel="noreferrer"
              >
                Edurific
              </a>{" "}
            </p>
          </div>
          {/* /.bottom-footer */}
        </div>
      </footer>
      {/* /.theme-footer-four */}
    </div>
  );
};

export default EventOrganizer;