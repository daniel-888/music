  import React from "react";
  import { Link } from "react-router-dom";
  import FeaturesEight from "../features/FeaturesEight";

  const HeroBannerFour = () => {
    return (
      <div className="hero-banner-four">
     {/*   <img
          src="images/shape/100.svg"
          alt="shape"
          className="shapes shape-four"
        />
        <img
          src="images/shape/101.svg"
          alt="shape"
          className="shapes shape-five"
        />
        <img
          src="images/shape/102.svg"
          alt="shape"
          className="shapes shape-six"
        />
        <img
          src="images/shape/103.svg"
          alt="shape"
          className="shapes shape-seven"
        />
*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 order-lg-last">
              <div className="illustration-holder">
                <img
                  src="images/assets/hero.png"
                  alt="shape"
                  className="illustration"
                />
              {/*  <img
                  src="images/assets/1.png"
                  alt="shape"
                  className="shapes shape-one"
                />
                <img
                  src="images/assets/3.png"
                  alt="shape"
                  className="shapes shape-two"
                />
                <img
                  src="images/assets/2.png"
                  alt="shape"
                  className="shapes shape-three"
                />
                <img
                  src="images/assets/4.png"
                  alt="shape"
                  className="shapes shape-four"
/> */}
              </div>
            { /* <p className="review-text">
                Over <span>10000+ students</span> all over the world.
              </p>
    */}
            </div>
            {/* End .col */}

            <div className="col-lg-6 order-lg-first">
              <div className="text-wrapper">
                <h1 data-aos="fade-up" data-aos-duration="1200">
                  <span>Music</span> can change the world. <span className="writer">~Beethoven</span> 
                </h1>
                <p
                  className="sub-text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Exclusive 1:1 session with our well-experienced music teachers who have mastered more than one genre.
                </p>
                <a
                  href="https://demo.edurific.com"
                  className="theme-btn-five"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  {" "}
                  Book Your 1 hour Free Class
                </a>
              </div>
              {/* /.text-wrapper */}
            </div>
            {/* End .col */}
          </div>
        </div>

     {/*    <div className="fancy-feature-eight mt-160 md-mt-100">
          <div className="container">
            <div className="bg-wrapper">
              <FeaturesEight />
            </div>
          </div>
        </div>
        /.fancy-feature-eight */}
      </div>
    );
    //  {/* /.hero-banner-four */}
  };

  export default HeroBannerFour;
