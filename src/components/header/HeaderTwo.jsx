import React, { useState } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "./mega-menu/MegaMenu";
import MegaMenuMobile from "./mega-menu/MegaMenuMobile";

const HeaderThree = () => {
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
            ? "theme-main-menu sticky-menu theme-menu-two bg-none fixed"
            : "theme-main-menu sticky-menu theme-menu-two bg-none"
        }
      >
        <div className="d-flex align-items-center justify-content-center">
          <div className="logo">
            <Link to="/">
              <img src="images/logo/deski_01.svg" alt="brand logo" />
            </Link>
          </div>
          {/* End Logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div
                className="navbar-collapse collapse"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <MegaMenu />
                  {/* End MegaMenu */}

                  <ul className="right-widget">
                    <li className="d-sm-flex">
                      <ul className="language-button-group d-flex align-items-center justify-content-center">
                        <li>
                          <a href="#" className="eng-lang active">
                            En.{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" className="ru-lang">
                            Ru.
                          </a>
                        </li>
                      </ul>
                      {/* End ul */}

                      <ul className="user-login-button d-flex align-items-center justify-content-center">
                        <li>
                          <Link to="login" className="signIn-action">
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link to="signup" className="signUp-action">
                            Sign Up
                          </Link>
                        </li>
                      </ul>
                      {/* End ul */}
                    </li>
                  </ul>
                  {/* End right-button-group  */}
                </div>
              </div>
            </div>
          </nav>
          {/* End nav */}
        </div>

        <MegaMenuMobile />
        {/* 	End Mega Menu for Mobile */}
      </div>
      {/* /.theme-main-menu */}
    </>
  );
};

export default HeaderThree;
