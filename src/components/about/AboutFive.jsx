import React from "react";

const AboutFive = () => {
  return (
    <div className="row">
      <div className="col-lg-6 order-lg-last">
        <div className="text-wrapper">
          <div className="title-style-two mb-35 md-mb-20">
            <h2>
              <span>
                Exclusive fetures{" "}
                <img src="images/shape/line-shape-5.svg" alt="shape" />
              </span>
              with great offers everytime.
            </h2>
          </div>
          {/* /.title-style-two */}
          <p>
            With Benefits from deski Pro, Earn rewards & Score discounts on
            purchases* Foryourself and your customers.
          </p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 order-lg-first">
        <div className="img-gallery">
          <img src="images/media/img_35.png" alt="media" />
          <img
            src="images/media/img_36.png"
            alt="media"
            className="overlay-img"
          />
          <img
            src="images/shape/49.svg"
            alt="shape"
            className="shapes shape-one"
          />
          <img
            src="images/shape/50.svg"
            alt="shape"
            className="shapes shape-two"
          />
        </div>
        {/*  /.img-gallery */}
      </div>
      {/* End .col */}
    </div>
  );
};

export default AboutFive;
