import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../../components/header/Header";
import { Link } from "react-router-dom";
import TeamFive from "../../../../components/team/TeamFive";
import Footer from "../../../../components/footer/Footer";
import CopyRight from "../../../../components/footer/CopyRight";

const Team5 = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Team V5 || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}

      <Header />
      {/* End Header */}

      {/* =============================================
            Fancy Hero Two
        ==============================================  */}
      <div className="fancy-hero-five  bg-white">
        <img
          src="images/shape/95.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/96.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="bg-wrapper">
          <div className="container">
            <div className="col-xl-9 col-lg-11 m-auto text-center">
              <h6 className="page-title">Our Team</h6>
              <h1 className="heading">
                <span>
                  We’ve Most Talented
                  <img src="images/shape/line-shape-11.svg" alt="" />
                </span>
                Team Members
              </h1>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-two */}

      {/* =====================================================
            Team Section Five
        ===================================================== */}
      <div className="team-section-four custom-bg">
        <div className="container">
          <div className="team-wrapper">
            <div className="row">
              <TeamFive />
            </div>
            <img
              src="images/shape/126.svg"
              alt="shape"
              className="shapes shape-one"
            />
          </div>
          {/*  /.team-wrapper */}
        </div>
      </div>
      {/* /.team-section-five */}

      {/* =====================================================
            Fancy Short Banner Eleven
        ===================================================== */}
      <div className="fancy-short-banner-eleven">
        <div className="container">
          <div className="border-bottom pt-130 pb-150 md-pt-80 md-pb-80">
            <div className="row">
              <div className="col-lg-8 col-md-9 m-auto">
                <h2
                  className="font-rubik"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Want to be a part of our talented team?
                </h2>
                <Link
                  className="theme-btn-one btn-lg mt-50 md-mt-30"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                  to="/contact-cs"
                >
                  SEND YOUR CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  /.fancy-short-banner-eleven  */}

      {/* 	=====================================================
            Footer Style One
        ===================================================== */}
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
  );
};

export default Team5;
