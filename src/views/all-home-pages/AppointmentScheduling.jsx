import React, { useState } from "react";
import { Helmet } from "react-helmet";
import FancyFeatureTewentyFour from "../../components/features/FancyFeatureTewentyFour";
import FancyFeatureTewentyTwo from "../../components/features/FancyFeatureTewentyTwo";
import HeaderLandingAppointment from "../../components/header/landing/HeaderLandingAppointment";
import HeroBannerNine from "../../components/hero-banner/HeroBannerNine";
import TestimonialSeven from "../../components/testimonial/TestimonialSeven";
import SocialTwo from "../../components/social/SocialTwo";
import FooterEight from "../../components/footer/FooterEight";
import CopyRightFour from "../../components/footer/CopyRightFour";

const AppointmentScheduling = () => {
  // For header select menu
  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);

  return (
    <div className="main-page-wrapper p0 font-gordita">
      <Helmet>
        <title>
          Music Classes by Edurific
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLandingAppointment />
      {/* End Header Landing Appoinment Scheduling */}

      <HeroBannerNine />
      {/* End Hero Banner Nine */}

      {/* =============================================
            Fancy Feature Twenty Two
        ==============================================  */}
      <div className="fancy-feature-twentyTwo mt-200 md-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 col-md-8 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="title-style-eight text-center mb-40 md-mb-10">
                <h2>
                  One Platform. For any{" "}
                  <span>
                    business <img src="images/shape/191.svg" alt="shape" />
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <FancyFeatureTewentyTwo />
          </div>
        </div>
      </div>
      {/* /.fancy-feature-twentyTwo */}

      {/* =============================================
            Fancy Feature Twenty Three
        ==============================================  */}
      <div className="fancy-feature-twentyThree pt-170 md-pt-100" id="feature">
        <div className="container">
          <div
            className="title-style-nine text-center pb-180 md-pb-100"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <h6>Our Features</h6>
            <h2>
              Deski is all About Easy Bookings, Efficient Service, &{" "}
              <span>
                Robust Interface <img src="images/shape/192.svg" alt="shape" />
              </span>
            </h2>
            <p>
              Our online booking software allows you to schedule your client’s
              appointments easily & efficiently.
            </p>
          </div>
          {/* End title */}

          <div className="block-style-twentyThree">
            <div className="row align-items-center">
              <div
                className="col-lg-6 order-lg-last ml-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="screen-container ml-auto">
                  <div
                    className="oval-shape"
                    style={{ background: "#69FF9C" }}
                  ></div>
                  <div
                    className="oval-shape"
                    style={{ background: "#FFF170" }}
                  ></div>
                  <img
                    src="images/assets/screen_18.png"
                    alt=""
                    className="shapes shape-one"
                  />
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-lg-5 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>One click away</h6>
                  <h3 className="title">Make your schedule Online easily.</h3>
                  <p>
                    From its medieval origins to the digital era, learn
                    everything there is to know about the ubiquitep lorem ipsum
                    passage.
                  </p>
                </div>
                {/*  /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyThree */}

          <div className="block-style-twentyThree">
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="screen-container mr-auto"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                >
                  <div
                    className="oval-shape"
                    style={{ background: "#FFDE69" }}
                  ></div>
                  <div
                    className="oval-shape"
                    style={{ background: "#FF77D9" }}
                  ></div>
                  <img
                    src="images/assets/screen_19.png"
                    alt="screen"
                    className="shapes shape-two"
                  />
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-lg-5 ml-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>WORKFLOW MANAGEMENT</h6>
                  <h3 className="title">Automate reminders & follow-ups.</h3>
                  <p>
                    Calendly puts your entire meeting workflow on autopilot,
                    sending everything from reminder emails to thank you notes,
                    so you can focus on the work only you can do.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyThree */}

          <div className="block-style-twentyThree">
            <div className="row">
              <div
                className="col-lg-6 order-lg-last ml-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="screen-container ml-auto">
                  <div
                    className="oval-shape"
                    style={{ background: "#00F0FF" }}
                  ></div>
                  <div
                    className="oval-shape"
                    style={{ background: "#FC6BFF" }}
                  ></div>
                  <img
                    src="images/assets/screen_20.png"
                    alt="screen"
                    className="shapes shape-three"
                  />
                </div>
                {/* /.screen-container */}
              </div>
              <div
                className="col-lg-5 order-lg-first"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="text-wrapper">
                  <h6>ON-DEMAND SCHEDULING</h6>
                  <h3 className="title">
                    More connections and no cancellations.
                  </h3>
                  <p>
                    Prospects can schedule meetings in just a few clicks –
                    whenever the moment is right. And cancellations go down
                    because rescheduling is easy, fast, and on their terms.
                  </p>
                </div>
                {/* /.text-wrapper */}
              </div>
            </div>
          </div>
          {/* /.block-style-twentyThree */}
        </div>
      </div>
      {/* /.fancy-feature-twentyThree */}

      {/* 	=============================================
            Fancy Feature Twenty Four
        ==============================================  */}
      <div className="fancy-feature-twentyFour pt-140 md-pt-60" id="service">
        <div className="container">
          <div className="title-style-nine text-center">
            <h6>Indutries Include</h6>
            <h2>
              Deski has the ability to serve Any{" "}
              <span>
                Business Segment <img src="images/shape/194.svg" alt="shape" />
              </span>
            </h2>
          </div>
        </div>
        <div className="bg-wrapper mt-100 md-mt-80">
          <a
            href="#feedback"
            className="click-scroll-button scroll-target d-flex justify-content-center"
          >
            <img src="images/shape/200.svg" alt="shape" />
          </a>
          <div className="container">
            <FancyFeatureTewentyFour />
          </div>
          <img
            src="images/shape/195.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/196.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <img
            src="images/shape/197.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <img
            src="images/shape/198.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <img
            src="images/shape/199.svg"
            alt="shape"
            className="shapes shape-five"
          />
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* End .fancy feature twenty four */}

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
                className="col-lg-7 m-auto"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="title-style-nine text-center">
                  <h6>Testimonials</h6>
                  <h2>
                    What’s Our
                    <span>
                      Client <img src="images/shape/201.svg" alt="shape" />
                    </span>
                    Think About Us.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* End .container */}
          <div className="clientSliderSix style-two">
            <TestimonialSeven />
          </div>
        </div>
        {/*  /.inner-container */}
      </div>
      {/* /.client-feedback-slider-six */}

      {/*     =====================================================
        Partner Section One
    ===================================================== */}
      <div className="partner-section-one mt-170 md-mt-90 pb-120 md-pb-80">
        <div className="container">
          <div className="title-style-nine text-center mb-100">
            <h6>Our Partners</h6>
            <h2>
              They
              <span>
                Trust Us, <img src="images/shape/201.svg" alt="shape" />
              </span>{" "}
              & Vice Versa
            </h2>
          </div>
          {/* End title-style-nine */}
          <SocialTwo />
        </div>
        {/* End .container */}

        <img
          src="images/shape/202.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/203.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <img
          src="images/shape/204.svg"
          alt="shape"
          className="shapes shape-three"
        />
        <img
          src="images/shape/205.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <img
          src="images/shape/206.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <img
          src="images/shape/207.svg"
          alt="shape"
          className="shapes shape-six"
        />
        <img
          src="images/shape/208.svg"
          alt="shape"
          className="shapes shape-seven"
        />
        <img
          src="images/shape/209.svg"
          alt="shape"
          className="shapes shape-eight"
        />
      </div>
      {/*  /.partner-section-one */}

      {/* 	=====================================================
				Fancy Short Banner Ten
			===================================================== */}
      <div className="fancy-short-banner-ten mt-170 md-mt-80">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-8 col-lg-11 m-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="text-center">
                <h2>Try Deski Free</h2>
                <p>
                  After your 14-day trial of our Professional plan, enjoy the
                  Free version of Calendly – forever.
                </p>
              </div>
              {/*  /.title-style-six */}
            </div>
          </div>
          {/* End .row */}
          <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="150">
            <div className="dropdown download-btn">
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
            {/* End dropdown */}
            <div className="info-text">
              No Credit Card Required. Cancel Anytime
            </div>
          </div>
        </div>
        {/*  /.container */}
        <img
          src="images/shape/210.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/211.svg"
          alt="shape"
          className="shapes shape-two"
        />
      </div>
      {/*  /.fancy-short-banner-ten */}

      {/*  =====================================================
            Footer Style Eight
        ===================================================== */}
      <footer className="theme-footer-eight mt-100">
        <div className="top-footer">
          <div className="container">
            <FooterEight />
          </div>
          {/* /.container */}
        </div>

        <div className="container">
          <div className="bottom-footer mt-50 md-mt-30">
            <CopyRightFour />
          </div>
        </div>
      </footer>
      {/* /.theme-footer-eight  */}
    </div>
  );
};

export default AppointmentScheduling;
