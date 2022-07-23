import React, { useState } from "react";
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";


const menuContent = [
  {
    itemName: "Home",
    itemRoute: "#home",
  },
  {
    itemName: "About Us",
    itemRoute: "#about",
  },
 
  {
    itemName: "Packages",
    itemRoute: "#packages",
  },
  {
    itemName: "FAQs",
    itemRoute: "#faq",
  },
];




const HeaderFour = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 68) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-six bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-six bg-none"
        }
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <a href="#">
              <img src="images/logo/LOGO.svg" alt="Edurific logo" />
            </a>
          </div>
          {/* End Logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
                <div className="mob-header">
                  <button className="toggler-menu" onClick={handleClick}>
                     <div className={click ? "active" : ""}>
                       <span></span>
                       <span></span>
                       <span></span>
                     </div>
                  </button>
                </div>
                {/* End Header */}
              <div
                className="navbar-collapse collapse"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between text-center align-items-center">
                <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={[
                      "features",
                      "about",
                      "product",
                      "pricing",
                      "feedback",
                    ]}
                    currentClassName="active"
                    offset={-500}
                  >
                    {menuContent.map((val, i) => (
                      <li key={i} className="nav-item">
                        <a href={val.itemRoute} className="nav-link">
                          {val.itemName}
                        </a>
                      </li>
                    ))}
                  </Scrollspy>
                  {/* End MegaMenu */}

                  <ul className="right-button-group d-flex align-items-center justify-content-center">
                    <li>
                      <a href="https://demo.edurific.com" className="theme-btn-five" target="_blank">
                        Book a Free Masterclass
                      </a>
                    </li>
                  </ul>
                  {/* End right-button-group  */}
                </div>
              </div>
            </div>
          </nav>
          {/* End nav */}
        </div>      
      </div>
      {/* /.theme-main-menu */}
      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <a href="#">
            <img src="images/logo/edurific.png" alt="Edurific" />
          </a>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="images/icon/close.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <Scrollspy
          className="navbar-nav"
          id="theme-menu-list"
          items={["features", "about", "product", "pricing", "feedback"]}
          currentClassName="active"
          offset={-200}
        >
          {menuContent.map((val, i) => (
            <li key={i} className="nav-item">
              <a
                href={val.itemRoute}
                className="nav-link"
                onClick={handleClick}
              >
                {val.itemName}
              </a>
            </li>
          ))}
        </Scrollspy>
      </div> 
      {/* Mobile Menu End */}
    </>
  );
};

export default HeaderFour;
