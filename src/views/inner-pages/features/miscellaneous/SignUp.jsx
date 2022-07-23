import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SignUpForm from "../../../../components/contact/form/SignUpForm";

const SignUp = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>Sign Up || Deski-Saas & Software React Template</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="user-data-page clearfix d-lg-flex">
        <div className="illustration-wrapper d-flex align-items-center justify-content-between flex-column">
          <h3 className="font-rubik">
            We have a “strategic” plan its <br /> called doing things.
          </h3>
          <div className="illustration-holder">
            <img
              src="images/assets/ils_08.svg"
              alt="illustration"
              className="illustration"
            />
            <img
              src="images/assets/ils_08.1.svg"
              alt="illustration"
              className="shapes shape-one"
            />
            <img
              src="images/assets/ils_08.2.svg"
              alt="illustration"
              className="shapes shape-two"
            />
          </div>
        </div>
        {/* /.illustration-wrapper  */}

        <div className="form-wrapper">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <Link to="/event-organizer">
                <img src="images/logo/deski_01.svg" alt="logo" />
              </Link>
            </div>
            <Link className="font-rubik go-back-button" to="/event-organizer">
              Go to home
            </Link>
          </div>
          {/* End d-flex */}
          <div className="mt-30">
            <h2>Join with thousands of startup!</h2>
            <p className="header-info pt-30 pb-50">
              Already have an account? <Link to="login">Login</Link>
            </p>
          </div>
          <SignUpForm />
          {/* End Signup Form */}
          <p className="text-center font-rubik copyright-text">
            Copyright @{new Date().getFullYear()}{" "}
            <a
              href="https://themeforest.net/user/ib-themes/portfolio"
              target="_blank"
              title="myFrame"
              rel="noreferrer"
            >
              ib-themes
            </a>{" "}
            inc.
          </p>
          {/* End .copyright */}
        </div>
        {/* /.form-wrapper */}
      </div>
      {/* /.user-data-page */}
    </div>
  );
};

export default SignUp;
