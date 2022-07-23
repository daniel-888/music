import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";

const HeaderLandingWebsiteBuilder = () => {
  // For Mobile  menu
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-seven bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-seven bg-none"
        }
      >
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-1">
            <Link to="/doc-landing">
              <img src="images/logo/deski_09.svg" alt="brand" />
            </Link>
          </div>
          {/* End logo */}

          <div className="right-widget order-lg-3">
            <ul className="d-flex align-items-center">
              <li>
                <Link
                  to="login"
                  className="signIn-action d-flex align-items-center"
                >
                  <img src="images/icon/120.svg" alt="icon" />
                  <span>login</span>
                </Link>
              </li>
              {/* End login */}
              <li>
                <Link
                  to="/signup"
                  className="theme-btn-twelve d-none d-lg-block"
                >
                  Start Free Trial
                </Link>
              </li>
            </ul>
          </div>
          {/* End right-widget */}

          <nav
            id="mega-menu-holder"
            className="navbar navbar-expand-lg pl-xl-5 ml-xl-5 order-lg-2"
          >
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
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={["home", "feature", "p-tour", "feedback"]}
                    currentClassName="active"
                    offset={-90}
                  >
                    <li className="nav-item">
                      <a href="#home" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#feature" className="nav-link">
                        Feature
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#p-tour" className="nav-link">
                        Product Tour
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="#feedback" className="nav-link">
                        Feedback
                      </a>
                    </li>
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
          {/* End Navbar */}
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <Link to="/doc-landing">
            <img src="images/logo/deski_06.svg" alt="brand" />
          </Link>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="images/icon/close.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <Scrollspy
          className="navbar-nav  main-side-nav font-gordita"
          items={["home", "feature", "p-tour", "feedback"]}
          currentClassName="active"
          offset={-90}
        >
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#feature" className="nav-link">
              Feature
            </a>
          </li>
          <li className="nav-item">
            <a href="#p-tour" className="nav-link">
              Product Tour
            </a>
          </li>

          <li className="nav-item">
            <a href="#feedback" className="nav-link">
              Feedback
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* Mobile Menu End */}
    </>
  );
};

export default HeaderLandingWebsiteBuilder;
