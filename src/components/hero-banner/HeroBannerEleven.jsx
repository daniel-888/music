import React from "react";
import FormDemo from "../../components/form/FormDemo";
import BrandFive from "../../components/brand/BrandFive";

const HeroBannerEleven = () => {
  return (
    <div className="hero-banner-eleven lg-container">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-6">
            <div className="hero-text-wrapper">
              <h1>
                Edit & Sign <br /> PDF{" "}
                <span>
                  documents
                  <img
                    src="images/shape/line-shape-12.svg"
                    alt="shape"
                    className="cs-screen"
                  />
                </span>
                Online free.
              </h1>
              <p className="hero-sub-heading">
                Document edit, workflow, simplified
              </p>
              <FormDemo />
              <p className="term-text">No credit card required</p>
            </div>
            {/* .hero-text-wrapper */}
          </div>
          {/* End .col-xl-7 */}

          <div className="illustration-container">
            <img src="images/assets/ils-02.png" alt="illustration" />
          </div>
        </div>
        {/* Emd .row */}
      </div>
      {/* End .container */}

      <div className="partner-slider-two mt-150 md-mt-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-md-10 m-auto">
              <p className="text-center text-lg">
                Join <span>27,000+</span> companies who’ve reached document
                workflow with Deski
              </p>
            </div>
          </div>
          <div className="partnerSliderTwo">
            <BrandFive />
          </div>
        </div>
      </div>
      {/*  /.partner-slider-two */}
    </div>
    //    .hero-banner-eleven
  );
};

export default HeroBannerEleven;
