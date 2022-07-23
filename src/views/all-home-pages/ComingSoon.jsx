import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/",
  },
  {
    icon: "fa-instagram",
    link: "https://www.instagram.com/",
  },
  {
    icon: "fa-pinterest-p",
    link: "https://www.pinterest.com/",
  },

  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/",
  },
];

const ComingSoon = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Helmet>
        <title>
        Music Classes by Edurific
        </title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="full-height-layout d-flex align-items-center">
        <div className="coming-soon-content font-gordita">
          <div className="logo coming-soon-brand">
            <Link to="/">
              <img src="images/logo/deski_06.svg" alt="brand logo" />
            </Link>
          </div>
          <h6>COMING SOON</h6>
          <h1 data-aos="fade-up">Get notified when we’r ready to launch!</h1>
          <div className="row">
            <div className="col-lg-9 m-auto">
              <p>
                We're under construction. Check back for an update soon. Stay in
                touch!
              </p>
            </div>
          </div>
          <form onClick={handleSubmit}>
            <input type="email" placeholder="ihidago@ujufidnan.gov" />
            <button>Notify Me</button>
          </form>

          <ul className="social-icon d-flex justify-content-center">
            {socialContent.map((val, i) => (
              <li key={i}>
                <a href={val.link} target="_blank" rel="noreferrer">
                  <i className={`fa ${val.icon}`}></i>
                </a>
              </li>
            ))}
          </ul>

          <img
            src="images/shape/179.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/180.svg"
            alt="shape"
            className="shapes shape-two"
          />
          <img
            src="images/shape/181.svg"
            alt="shape"
            className="shapes shape-three"
          />
          <img
            src="images/shape/182.svg"
            alt="shape"
            className="shapes shape-four"
          />
          <img
            src="images/shape/183.svg"
            alt="shape"
            className="shapes shape-five"
          />
          <img
            src="images/shape/184.svg"
            alt="shape"
            className="shapes shape-six"
          />
          <img
            src="images/shape/185.svg"
            alt="shape"
            className="shapes shape-seven"
          />
          <img
            src="images/shape/186.svg"
            alt="shape"
            className="shapes shape-eight"
          />
          <img
            src="images/shape/187.svg"
            alt="shape"
            className="shapes shape-nine"
          />
          <img
            src="images/shape/188.svg"
            alt="shape"
            className="shapes shape-ten"
          />
        </div>
        {/* /.coming-soon-content */}
      </div>
    </>
  );
};

export default ComingSoon;
