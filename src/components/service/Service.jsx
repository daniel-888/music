import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    img: "img_36",
    titleTextOne: "Friendly dashboard &",
    TitleTextTwo: "Cool Interface.",
  },
  {
    img: "img_37",
    titleTextOne: " Interface Design",
    TitleTextTwo: "with UX.",
  },
  {
    img: "img_38",
    titleTextOne: " Social Media & Online",
    TitleTextTwo: "Marketing.",
  },
  {
    img: "img_39",
    titleTextOne: " Mobile Application",
    TitleTextTwo: "Design & Dev.",
  },
  {
    img: "img_40",
    titleTextOne: " Keyword Research &",
    TitleTextTwo: "Article writing.",
  },
  {
    img: "img_41",
    titleTextOne: " HTML & WordPress",
    TitleTextTwo: "Development.",
  },
];

const Service = () => {
  return (
    <div className="row">
      {serviceContent.map((val, i) => (
        <div className="col-lg-4 col-md-6" key={i}>
          <div className="block-style-thirtyFour">
            <img
              src={`images/gallery/${val.img}.jpg`}
              alt="gallery"
              className="w-100 tran5s"
            />
            <div className="hover-content">
              <h4 className="font-gordita">
                <Link to="/service-details">
                  {" "}
                  {val.titleTextOne} <br /> {val.TitleTextTwo}
                </Link>
              </h4>

              <Link to="/service-details" className="arrow">
                <i className="flaticon-right-arrow-1"></i>{" "}
              </Link>
            </div>
            {/* <!-- /.hover-content --> */}
          </div>
          {/* <!-- /.block-style-thirtyFour --> */}
        </div>
      ))}
    </div>
  );
};

export default Service;
