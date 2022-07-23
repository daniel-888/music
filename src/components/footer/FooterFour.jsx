import React from "react";
import { Link } from "react-router-dom";

const linksFooterContent = [
  {
    itemName: "Home",
    routePath: "#",
  },
  {
    itemName: "Coding",
    routePath: "https://edurific.com/",
  },
  {
    itemName: "NFT",
    routePath: "/",
  },
];

const legalFooterContent = [
  {
    itemName: "Terms of use",
    routePath: "/",
  },
  {
    itemName: "Terms & conditions",
    routePath: "/",
  },
  {
    itemName: "Privacy policy",
    routePath: "/",
  },
];

const productsFooterContent = [
  {
    itemName: "Team",
    routePath: "/",
  },
  {
    itemName: "About us",
    routePath: "/",
  },
  {
    itemName: "Contact",
    routePath: "/",
  },
];

const FooterFour = () => {
  return (
    <div className="row justify-content-end">
      <div className="col-xl-4 col-lg-3 col-12 footer-about-widget">
        <div className="logo">
          <a href="#">
            <img src="images/logo/edurific.png" alt="" />
          </a>
        </div>
        <ul className="font-rubik mt-10">
          <li>
            <a href="mailto:hello@edurific.com">hello@edurific.com</a>
          </li>
          <li>
            <a href="tel:+91 8037097097">+91 8037097097</a>
          </li>
          <li>
            <a href="tel:+441522458957">+44 1522458957</a>
          </li>
        </ul>
      </div>
      {/* /.footer-list */}

      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">Links</h5>
        <ul>
          {linksFooterContent.map((list, i) => (
            <li key={i}>
              <a href={list.routePath} target="blank">{list.itemName}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* /.footer-list */}
      <div className="col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">Legal</h5>
        <ul>
          {legalFooterContent.map((list, i) => (
            <li key={i}>
              <Link to={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}

      <div className="col-xl-2 col-lg-3 col-md-4 footer-list">
        <h5 className="footer-title font-slab">Products</h5>
        <ul className="pr-5">
          {productsFooterContent.map((list, i) => (
            <li key={i}>
              <Link to={list.routePath}>{list.itemName}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /.footer-list */}
    </div>
  );
};

export default FooterFour;
