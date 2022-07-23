import React from "react";
import { Link } from "react-router-dom";

const BlogContent = [
  {
    img: "media_12",
    tag: "Technology",
    title: `A Discount Cartridge Is Better Ever.`,
    routePath: "/blog-details",
    dealyAnimation: "50",
  },
  {
    img: "media_10",
    tag: "Software",
    title: `Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip
    exea.`,
    routePath: "/blog-details",
    dealyAnimation: "100",
  },
  {
    img: "media_11",
    tag: "Blog",
    title: `Excepteur sint occaat cupidatat proidet nisi sunt in culpa`,
    routePath: "/blog-details",
    dealyAnimation: "150",
  },
];

const BlogStyle6 = () => {
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
            <div className="tag">{item.tag}</div>
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

export default BlogStyle6;
