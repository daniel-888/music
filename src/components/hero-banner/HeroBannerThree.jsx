import React from "react";
import FormDoc from "../form/FormDoc";
import { Link } from "react-router-dom";

const HeroBannerThree = () => {
  return (
    <div className="hero-banner-three">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-11 col-md-8 m-auto">
            <h1 className="font-rubik">Doc software you looking for.</h1>
          </div>
          {/* End .col */}

          <div className="col-xl-8 col-lg-9 m-auto">
            <p className="sub-text font-rubik">
              With deski Docs, you can write, edit, and collaborate wherever you
              are with 7 day trial
            </p>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}

        <div className="search-filter-form">
          <FormDoc />
        </div>
        {/* End search-filter-from */}

        <p className="sing-in-call">
          Already using deski?{" "}
          <Link to="/login" className="font-rubik">
            Sign in.
          </Link>
          .
        </p>

        <img
          src="images/assets/ils_09.svg"
          alt="illustration"
          className="illustration"
        />
      </div>
      {/* /.container */}

      <img src="images/shape/68.svg" alt="shape" className="shapes shape-one" />
      <img src="images/shape/69.svg" alt="shape" className="shapes shape-two" />
      <img
        src="images/shape/70.svg"
        alt="shape"
        className="shapes shape-three"
      />
      <img
        src="images/shape/71.svg"
        alt="shape"
        className="shapes shape-four"
      />
      <img
        src="images/shape/72.svg"
        alt="shape"
        className="shapes shape-five"
      />
      <img src="images/shape/73.svg" alt="shape" className="shapes shape-six" />
      <img
        src="images/shape/74.svg"
        alt="shape"
        className="shapes shape-seven"
      />
      <img
        src="images/shape/75.svg"
        alt="shape"
        className="shapes shape-eight"
      />
      <img
        src="images/shape/76.svg"
        alt="shape"
        className="shapes shape-nine"
      />
      <img src="images/shape/77.svg" alt="shape" className="shapes shape-ten" />
    </div>
    // End hero-banner-three
  );
};

export default HeroBannerThree;
