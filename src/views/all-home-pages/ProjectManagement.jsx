import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import FaqClassic from "../../components/faq/FaqClassicTwo";
import SocialTwo from "../../components/social/SocialTwo";
import CounterOne from "../../components/counter/CounterOne";
import CallToActionFour from "../../components/call-to-action/CallToActionFour";
import Footer from "../../components/footer/Footer";
import CopyRight from "../../components/footer/CopyRight";

const ProjectManagement = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>
          {" "}
          Music Classes by Edurific
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* 
     =============================================
			Hero Banner One
		============================================== */}
      <div className="hero-banner-one">
        <div className="hero-upper-container">
          <div className="icon-box-one">
            <img src="images/logo/01.png" alt="logo" />
          </div>
          <div className="icon-box-two">
            <img src="images/logo/02.png" alt="logo" />
          </div>
          <div className="icon-box-three">
            <img src="images/logo/03.png" alt="logo" />
          </div>
          <div className="icon-box-four">
            <img src="images/logo/04.png" alt="logo" />
          </div>
          <div className="icon-box-five">
            <img src="images/logo/05.png" alt="logo" />
          </div>
          <div className="icon-box-six">
            <img src="images/logo/06.png" alt="logo" />
          </div>
          <div className="icon-box-seven">
            <img src="images/logo/07.png" alt="logo" />
          </div>
          <div className="icon-box-eight">
            <img src="images/logo/08.png" alt="logo" />
          </div>

          <div className="bubble-one"></div>
          <div className="bubble-two"></div>
          <div className="bubble-three"></div>
          <div className="bubble-four"></div>
          <div className="bubble-five"></div>
          <div className="bubble-six"></div>
          {/* End all bubble images */}

          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 m-auto">
                <h1 className="font-rubik hero-heading">
                  Get your work done with <span>deski</span>
                </h1>
                <p className="hero-sub-heading">
                  The first project management platform that brings everything
                  together
                </p>
              </div>
              {/* End .col */}
            </div>
            {/* End row */}

            <form
              action="#"
              className="subscription-form"
              onClick={handleSubmit}
            >
              <input type="email" placeholder="Your work email" />
              <button>Try for free</button>
            </form>
            {/* End form */}

            <p className="sing-in-call">
              Already using deski? <Link to="/login">Sign in.</Link>
            </p>
          </div>
          {/* End .container */}
        </div>
        {/* /.hero-upper-container */}
      </div>
      {/* /.hero-banner-one */}

      {/* 
     =============================================
				Fancy Feature One
		============================================== */}
      <div className="fancy-feature-one pb-150 md-pb-80">
        <div className="text-center">
          <div className="feature-img-area">
            <img src="images/assets/feature-img-01.png" alt="feature" />
            <img
              src="images/assets/feature-img-01-01.png"
              alt="feature"
              className="cs-screen screen-one"
            />
            <img
              src="images/assets/feature-img-01-02.png"
              alt="feature"
              className="cs-screen screen-two"
              data-aos="fade-left"
              data-aos-duration="1200"
            />
            <img
              src="images/assets/feature-img-01-03.png"
              alt="feature"
              className="cs-screen screen-three"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            />
            <img
              src="images/assets/feature-img-01-04.png"
              alt="feature"
              className="cs-screen screen-four"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="150"
            />
            <img
              src="images/assets/feature-img-01-05.png"
              alt="feature"
              className="cs-screen screen-five"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="200"
            />
          </div>
          {/* /.feature-img-area */}
        </div>
        {/* /.text-center */}

        {/* 
        =============================================
				Fancy Block Style One
		    ============================================== */}
        <div className="block-style-one">
          <div className="container">
            <div className="d-lg-flex align-items-center justify-content-between inner-container">
              <div className="block-meta-data text-center">
                <div className="line-dot-container">
                  <div className="icon-box">
                    <img src="images/icon/01.svg" alt="icon" />
                  </div>{" "}
                  {/* /.icon-box */}
                  <p>Create Project</p>
                </div>
                <div className="hover-content">
                  <span>
                    Don’t waste time on tedious manual tasks. Let Automation do
                    it for you. Simplify workflows, reduce errors, and save time
                    for solving more.
                  </span>
                </div>
              </div>{" "}
              {/* /.block-meta-data  */}
              <div className="block-meta-data text-center">
                <div className="line-dot-container">
                  <div className="icon-box">
                    <img src="images/icon/02.svg" alt="icon" />
                  </div>
                  {/* /.icon-box */}
                  <p>Making Plan</p>
                </div>
                <div className="hover-content">
                  <span>
                    Now it's more easy to make plan. Let Automation do it for
                    you. Simplify workflows, reduce errors, and save time for
                    solving more.
                  </span>
                </div>
              </div>
              {/* /.block-meta-data  */}
              <div className="block-meta-data text-center">
                <div className="line-dot-container">
                  <div className="icon-box">
                    <img src="images/icon/03.svg" alt="icon" />
                  </div>
                  {/* /.icon-box */}
                  <p>Create Wireframe</p>
                </div>
                <div className="hover-content text-center">
                  <span>
                    You are one step ahead to create wireframe. Let Automation
                    do it for you. Simplify workflows.
                  </span>
                </div>
              </div>
              {/* /.block-meta-data */}
              <div className="block-meta-data text-center">
                <div className="line-dot-container">
                  <div className="icon-box">
                    <img src="images/icon/04.svg" alt="icon" />
                  </div>
                  {/* /.icon-box */}
                  <p>Final Output</p>
                </div>
                <div className="hover-content text-right">
                  <span>
                    Checkout the final output. Let Automation do it for you.
                    Simplify workflows, reduce errors, and save time for solving
                    more.
                  </span>
                </div>
              </div>
              {/* /.block-meta-data */}
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.block-style-one */}
      </div>
      {/* /.fancy-feature-one */}

      {/* 
     =============================================
				Fancy Feature Two
		============================================== */}
      <div className="fancy-feature-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-9 m-auto">
              <div className="title-style-one text-center mb-190 md-mb-100">
                <h2>Know everything about App features.</h2>
              </div>
              {/* /.title-style-one */}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center block-style-two pb-250 md-pb-90">
            <div className="col-lg-7 col-md-8 m-auto">
              <div data-aos="fade-right" data-aos-duration="1200">
                <div className="img-holder img-holder-one">
                  <div
                    className="cs-screen progress-line-one"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  ></div>
                  <div
                    className="cs-screen progress-line-two"
                    data-aos="fade-right"
                    data-aos-duration="1200"
                  ></div>
                  <img src="images/assets/feature-img-05.png" alt="feature" />
                  <img
                    src="images/shape/1.svg"
                    alt="feature"
                    className="cs-screen screen-one"
                  />
                  <img
                    src="images/shape/2.svg"
                    alt="feature"
                    className="cs-screen dot-shape"
                  />
                  <div className="bubble-one"></div>
                  <div className="bubble-two"></div>
                  <div className="bubble-three"></div>
                  <div className="bubble-four"></div>
                </div>
                {/* /.img-holder */}
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="text-wrapper"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <h6 className="font-rubik" style={{ color: "#FF5291" }}>
                  FLEXIBILITY
                </h6>
                <h3 className="font-gilroy-bold">
                  Get instant visibility into all your team work.
                </h3>
                <p>
                  Don’t waste time on tedious manual tasks. Let Automation do it
                  for you. Simplify workflows, reduce errors, and save time for
                  solving more important problems.
                </p>
                <a href="#">Learn about flexibility</a>
              </div>
              {/*  /.text-wrapper */}
            </div>
          </div>
          {/* /.block-style-two */}

          <div className="row align-items-center block-style-two pb-250 md-pb-90">
            <div className="col-lg-6 col-md-8 m-auto order-lg-last">
              <div data-aos="fade-left" data-aos-duration="1200">
                <div className="img-holder img-holder-two">
                  <img src="images/assets/feature-img-06.png" alt="feature" />
                  <img
                    src="images/assets/feature-img-06-01.png"
                    alt="feature"
                    className="cs-screen screen-one"
                  />
                  <img
                    src="images/shape/3.svg"
                    alt="feature"
                    className="cs-screen screen-two"
                  />
                  <img
                    src="images/shape/4.svg"
                    alt="feature"
                    className="cs-screen dot-shape"
                  />
                  <div className="bubble-one"></div>
                  <div className="bubble-two"></div>
                  <div className="bubble-three"></div>
                  <div className="bubble-four"></div>
                </div>
                {/* /.img-holder */}
              </div>
            </div>
            <div className="col-lg-6 order-lg-first">
              <div
                className="text-wrapper pl-5 pr-5"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <h6 className="font-rubik" style={{ color: "#AA4CFF" }}>
                  QUICK & FAST
                </h6>
                <h3 className="font-gilroy-bold">Fast App response time</h3>
                <p>
                  deski is 5x as fast to load than other popular tools, quick to
                  configure.
                </p>
                <div className="quote">
                  <blockquote>
                    “Our team really feel great to use the deski app specially
                    their faster load & server speed”
                  </blockquote>
                  <div className="d-flex align-items-center">
                    <img src="images/media/img_01.png" alt="media" />
                    <div className="info-meta">
                      <h5>Micle Duke, Product Manager</h5>
                      <span className="font-rubik">Uber Inc.</span>
                    </div>
                  </div>
                </div>
                {/*  /.quote */}
              </div>
              {/*  /.text-wrapper */}
            </div>
          </div>
          {/* /.block-style-two */}

          <div className="row align-items-center block-style-two pb-170 md-pb-50">
            <div className="col-lg-7 col-md-7 m-auto">
              <div data-aos="fade-right" data-aos-duration="1200">
                <div className="img-holder img-holder-three">
                  <img src="images/assets/feature-img-07.png" alt="feature" />
                  <img
                    src="images/assets/feature-img-07-01.png"
                    alt="feature"
                    className="cs-screen screen-one"
                  />
                  <img
                    src="images/shape/5.svg"
                    alt="feature"
                    className="cs-screen screen-two"
                  />
                  <img
                    src="images/shape/6.svg"
                    alt="feature"
                    className="cs-screen dot-shape"
                  />
                  <div className="bubble-one"></div>
                  <div className="bubble-two"></div>
                  <div className="bubble-three"></div>
                  <div className="bubble-four"></div>
                </div>
                {/* /.img-holder */}
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="text-wrapper"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <h6 className="font-rubik" style={{ color: "#03DDD5" }}>
                  PROJECT STATUS
                </h6>
                <h3 className="font-gilroy-bold">
                  Real time project status monitoring.
                </h3>
                <p>
                  Don’t waste time on tedious manual tasks. Let Automation do it
                  for you. Simplify workflows, reduce errors, and save time for
                  solving more important problems.
                </p>
              </div>
              {/* /.text-wrapper */}
            </div>
          </div>
          {/* /.block-style-two */}
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-two */}

      {/* 
     =============================================
			Usable Tools Section
		============================================== */}
      <div className="useable-tools-section bg-color mt-140 mb-50 md-mt-80">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="container">
          <h6 className="font-rubik">Integrates with your tools</h6>
          <h2>
            Deski ties into your existing tools, services, & workflow. Get
            notifications or create a Story with others tools.
          </h2>

          <SocialTwo />
        </div>
        {/* /.container */}
      </div>
      {/* /.useable-tools-section */}

      {/* 
     =============================================
				Fancy Feature Three
		============================================== */}
      <div className="fancy-feature-three pt-200 md-pt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-one">
                <h6 className="font-rubik">You’re in good company</h6>
                <h2>Join the community by using our apps to grow faster.</h2>
              </div>
              {/* /.title-style-one */}

              <CounterOne />
              {/* /.counter-info-classic */}
            </div>

            <div className="col-lg-6">
              <div className="clients-feedback-classic md-mt-80">
                <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="images/media/img_02.png"
                    alt=""
                    className="media-meta"
                  />
                  <p>
                    it’s a great exprience to work with deski. They’r vey humble
                    and expert & the service has been excellent & super.
                  </p>
                  <h6 className="name">Rena Singleton</h6>
                  <span className="font-rubik disg-info">
                    Former Assistant Jamuna Group.
                  </span>
                </div>{" "}
                {/* /.feedback-wrapper */}
                <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="images/media/img_03.png"
                    alt=""
                    className="media-meta"
                  />
                  <p>
                    it’s a great exprience to work with deski. They’r vey humble
                    and expert & the service has been excellent & super.
                  </p>
                  <h6 className="name">Rashed Ka.</h6>
                  <span className="font-rubik disg-info">
                    UI designer Baper Inc.
                  </span>
                </div>{" "}
                {/* /.feedback-wrapper */}
                <div
                  className="feedback-wrapper"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img
                    src="images/media/img_04.png"
                    alt=""
                    className="media-meta"
                  />
                  <p>
                    it’s a great exprience to work with deski. They’r vey humble
                    and expert & the service has been excellent & super.
                  </p>
                  <h6 className="name">Zubayer Hasan</h6>
                  <span className="font-rubik disg-info">
                    Front-end coder HeloShape.
                  </span>
                </div>
                {/* /.feedback-wrapper */}
              </div>
              {/* /.clients-feedback-classic */}
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-feature-three */}

      {/* 
     =============================================
			Call To Action
		============================================== */}
      <div className="fancy-short-banner-one">
        <div className="container">
          <CallToActionFour />
        </div>
        {/* /.container */}
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="bubble-four"></div>
        <div className="bubble-five"></div>
        <div className="bubble-six"></div>
      </div>
      {/* /.fancy-short-banner-one */}

      {/* 
     =============================================
				Faq Classic
		============================================== */}
      <div className="faq-classic pt-225 md-pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title-style-one">
                <h6 className="font-rubik">Find your answers</h6>
                <h2>Have any thought? Look here.</h2>
              </div>
              {/* /.title-style-one */}
              <Link to="/faq" className="theme-btn-one mt-50 md-mt-30">
                {" "}
                Go to Faq
              </Link>
            </div>
            {/* End .col */}
            <div className="col-lg-6">
              <div className="md-mt-60">
                <FaqClassic />
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </div>
      {/* /.faq-classic */}

      {/* 
      =============================================
				Footer
		  ============================================== */}
      <div className="footer-bg-wrapper">
        <div className="bubble-one"></div>
        <div className="bubble-two"></div>
        <div className="bubble-three"></div>
        <div className="fancy-short-banner-two">
          <div className="container">
            <div className="content-wrapper">
              <div
                className="
                  bg-wrapper
                  d-lg-flex
                  align-items-center
                  justify-content-between
                "
              >
                <h2 className="font-gilroy-bold">
                  Don’t find the answer? contact us for any query.
                </h2>
                <Link to="/contact-pm"> Contact us</Link>
                <div className="bubble-one"></div>
                <div className="bubble-two"></div>
                <div className="bubble-three"></div>
                <div className="bubble-four"></div>
                <div className="bubble-five"></div>
              </div>
              {/* /.bg-wrapper */}
            </div>
            {/*  /.content-wrapper */}
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-short-banner-two */}

        <footer className="theme-footer-one pt-130 md-pt-70">
          <div className="top-footer">
            <div className="container">
              <Footer />
            </div>
            {/* /.container */}
          </div>
          {/* /.top-footer */}

          <div className="container">
            <div className="bottom-footer-content">
              <CopyRight />
            </div>
            {/*  /.bottom-footer */}
          </div>
        </footer>
        {/* /.theme-footer-one */}
      </div>
    </div>
  );
};

export default ProjectManagement;
