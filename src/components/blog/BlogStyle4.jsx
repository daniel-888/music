import React from "react";
import { Link } from "react-router-dom";

const BlogContent = [
  {
    img: "media_04",
    title: `A Discount Cartridge Is Better Ever.`,
    routePath: "/blog-details",
    dealyAnimation: "",
  },
  {
    img: "media_05",
    title: `Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip
    exea.`,
    routePath: "/blog-details",
    dealyAnimation: "50",
  },
  {
    img: "media_07",
    title: `Excepteur sint occaat cupidatat proidet nisi sunt in culpa
    `,
    routePath: "/blog-details",
    dealyAnimation: "100",
  },
];

const BlogStyle4 = () => {
  return (
    <>
      {BlogContent.map((item, i) => (
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
          data-aos-delay={item.dealyAnimation}
        >
          <div className="post-meta">
            <img
              src={`images/blog/${item.img}.png`}
              alt="media"
              className="image-meta"
            />
            <h3>
              <Link to="/blog-details" className="title">
                {item.title}
              </Link>
            </h3>
            <Link
              to={item.routePath}
              className="read-more d-flex justify-content-between align-items-center"
            >
              <span>Read More</span>
              <i className="flaticon-right-arrow"></i>
            </Link>
          </div>
          {/* /.post-meta */}
        </div>
      ))}
    </>
  );
};

export default BlogStyle4;
