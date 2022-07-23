import React from "react";

const socialContent = [
  {
    icon: "fa-facebook",
    link: "https://www.facebook.com/",
  },
  {
    icon: "fa-twitter",
    link: "https://twitter.com/",
  },
  {
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/",
  },
];

const FooterSix = () => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-4">
        <div className="logo">
          <a href="index.html">
            <img src="images/logo/deski_06.svg" alt="logo" />
          </a>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="title">Find us on Social Media</div>
        <ul className="d-flex justify-content-center social-icon">
          {socialContent.map((val, i) => (
            <li key={i}>
              <a href={val.link} target="_blank" rel="noreferrer">
                <i className={`fa ${val.icon}`}></i>
              </a>
            </li>
          ))}
        </ul>
        {/* End .social-icon */}
      </div>
      {/* End .col */}

      <div className="col-lg-4">
        <div className="title">We’r always happy to help.</div>
        <div className="text-center">
          <a href="mailto:ib-themes21@gmail.com" className="email">
            ask@jdeski.com
          </a>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default FooterSix;
