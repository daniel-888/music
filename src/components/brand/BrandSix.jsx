import React from "react";

const brandContent = [
  {
    colClass: `line-one`,
    imgList: [
      {
        img: "logo-47",
      },
      {
        img: "logo-48",
      },
      {
        img: "logo-49",
      },
    ],
  },
  {
    colClass: `line-two`,
    imgList: [
      {
        img: "logo-50",
      },
      {
        img: "logo-51",
      },
      {
        img: "logo-52",
      },
    ],
  },
];

const BrandSix = () => {
  return (
    <div className="row">
      {brandContent.map((val, i) => (
        <div className="col-sm-6" key={i}>
          <div className={val.colClass}>
            {val.imgList.map((brand, i) => (
              <div
                className="icon d-flex align-items-center justify-content-center"
                key={i}
              >
                <img src={`images/logo/${brand.img}.png`} alt="brand" />
              </div>
              //   /.icon
            ))}
          </div>
          {/* /.line-two */}
        </div>
      ))}
    </div>
  );
};

export default BrandSix;
