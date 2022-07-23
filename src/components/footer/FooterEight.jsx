import React from "react";
import { Link } from "react-router-dom";

const FooterEight = () => {
  return (
    <div className="row justify-content-end">
      <div className="col-xl-4 col-lg-3 col-12 footer-about-widget">
        <div className="logo">
          <a href="index">
            <img src="images/logo/deski_06.svg" alt="" />
          </a>
        </div>
        <ul className="font-rubik mt-10">
          <li>
            <a href="mailto:deskiinc@gmail.com">deskiinc@gmail.com</a>
          </li>
          <li>
            <a href="tel:+761 412 3224" className="phone">
              +761 412 3224
            </a>
          </li>
        </ul>
      </div>
      {/*  /.about-widget */}
      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title">Links</h5>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricing-cs">Pricing</Link>
          </li>
          <li>
            <Link to="/about-eo">About us</Link>
          </li>
          <li>
            <Link to="/features-customer-support">Careers</Link>
          </li>
          <li>
            <Link to="/solution-management">Features</Link>
          </li>
          <li>
            <Link to="/blog-v3">Blog</Link>
          </li>
          <li>
            <Link to="/">Demo the product</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title">Legal</h5>
        <ul>
          <li>
            <Link to="/terms-conditions">Terms of use</Link>
          </li>
          <li>
            <Link to="/terms-conditions">Terms & conditions</Link>
          </li>
          <li>
            <Link to="/terms-conditions">Privacy policy</Link>
          </li>
          <li>
            <Link to="/terms-conditions">Cookie policy</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
      <div className="col-xl-2 col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title">Products</h5>
        <ul>
          <li>
            <Link to="/product-customer-support">Take the tour</Link>
          </li>
          <li>
            <Link to="/login">Live chat</Link>
          </li>
          <li>
            <Link to="/solution-management">Self-service</Link>
          </li>
          <li>
            <Link to="/doc-box">Docs</Link>
          </li>
          <li>
            <Link to="/doc-box-with-banner">Info Box</Link>
          </li>
          <li>
            <Link to="/blog-details">deski Reviews</Link>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}
    </div>
    //   /.row
  );
};

export default FooterEight;
