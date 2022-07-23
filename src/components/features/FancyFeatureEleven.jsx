import React from "react";
import { Link } from "react-router-dom";

const FancyFeatureEleven = () => {
  return (
    <>
      <div className="block-style-sixteen" style={{ background: "#EBF3F1" }}>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div
                className="icon d-flex align-items-center justify-content-center"
                style={{ background: "#DEEAE7" }}
              >
                <img src="images/icon/73.svg" alt="icon" />
              </div>
              <h3 className="title">Mobile Application Design.</h3>
              <p>
                Commonly used in the graphic, print & publishing industris for
                previewing visual layout and mockups.
              </p>
              <Link to="/solution-management">
                <img src="images/icon/72.svg" alt="icon" />
              </Link>
            </div>
          </div>
        </div>
        <img
          src="images/assets/screen_02.png"
          alt=""
          className="shapes screen-one"
        />
      </div>
      {/* /.block-style-sixteen */}

      <div className="block-style-sixteen" style={{ background: "#EDF3F9" }}>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-5 col-lg-6 ml-auto"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div
                className="icon d-flex align-items-center justify-content-center"
                style={{ background: "#E1E7ED" }}
              >
                <img src="images/icon/74.svg" alt="icon" />
              </div>
              <h3 className="title">Branding & Design system.</h3>
              <p>
                Commonly used in the graphic, print & publishing industris for
                previewing visual layout and mockups.
              </p>
              <Link to="/solution-management">
                <img src="images/icon/72.svg" alt="icon" />
              </Link>
            </div>
          </div>
        </div>
        <img
          src="images/assets/screen_03.png"
          alt="screen"
          className="shapes screen-two"
        />
      </div>
      {/* /.block-style-sixteen */}

      <div className="block-style-sixteen" style={{ background: "#F9F1EF" }}>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-5 col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div
                className="icon d-flex align-items-center justify-content-center"
                style={{ background: "#EDE5E3" }}
              >
                <img src="images/icon/75.svg" alt="icon" />
              </div>
              <h3 className="title">Custome & Plugin Development.</h3>
              <p>
                Commonly used in the graphic, print & publishing industris for
                previewing visual layout and mockups.
              </p>
              <Link to="/solution-management">
                <img src="images/icon/72.svg" alt="icon" />
              </Link>
            </div>
          </div>
        </div>
        <img
          src="images/assets/screen_04.png"
          alt="screen"
          className="shapes screen-three"
        />
      </div>
      {/*  /.block-style-sixteen */}
    </>
  );
};

export default FancyFeatureEleven;
