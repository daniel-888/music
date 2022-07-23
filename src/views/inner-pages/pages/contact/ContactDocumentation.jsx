import React from "react";
import { Helmet } from "react-helmet";
import HeaderThree from "../../../../components/header/HeaderThree";
import ContactAddress from "../../../../components/contact/address/ContactAddress";
import ContactForm from "../../../../components/contact/form/ContactForm";
import CopyRight from "../../../../components/footer/CopyRight";
import FooterThree from "../../../../components/footer/FooterThree";
import CallToActionTwo from "../../../../components/call-to-action/CallToActionTwo";

const ContactDocumentation = () => {
  return (
    <div className="main-page-wrapper p0">
      <Helmet>
        <title>
          Contact Documentation || Deski-Saas & Software React Template
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderThree />
      {/* End Header */}

      {/* =============================================
				Fancy Hero Four
			==============================================  */}

      <div className="fancy-hero-four bg-doc space-fix">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-11 col-md-10 m-auto">
                <h6>Contact us</h6>
                <h2>Feel free to contact us or just say hi!</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.fancy-hero-four */}

      {/*  =============================================
				Contact Style Two
			==============================================  */}
      <div className="contact-style-two">
        <div className="container">
          <div className="contact-info-wrapper">
            <ContactAddress />
            <img
              src="images/shape/64.svg"
              alt="shape"
              className="shapes shape-one"
            />
            <img
              src="images/shape/65.svg"
              alt="shape"
              className="shapes shape-two"
            />
          </div>
          {/* /.contact-info-wrapper */}

          <div className="form-style-classic mt-200 md-mt-80">
            <ContactForm />
          </div>
        </div>
        {/* /.contact-style-two */}

        <div className="fancy-short-banner-four m0 pt-150 md-pt-100">
          <div className="container">
            <div className="bg-wrapper">
              <CallToActionTwo />
            </div>
            {/* /.bg-wrapper */}
          </div>
          {/* /.container */}
        </div>
        {/* /.fancy-short-banner-four */}

        {/* 	=====================================================
				Footer Style Three
			===================================================== */}
        <footer className="theme-footer-three pt-100">
          <div className="top-footer">
            <div className="container">
              <FooterThree />
            </div>
            {/* /.container */}
          </div>
          {/* /.top-footer */}

          <div className="container">
            <div className="bottom-footer-content">
              <div className="row">
                <div className="col-lg-8 ml-auto">
                  <CopyRight />
                </div>
              </div>
            </div>
            {/* /.bottom-footer */}
          </div>
        </footer>
        {/* /.theme-footer-three */}
      </div>
    </div>
  );
};

export default ContactDocumentation;
