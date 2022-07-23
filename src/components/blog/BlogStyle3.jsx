import React from "react";
import { Link } from "react-router-dom";

const BlogContent = [
  {
    img: "media_24",
    date: "23 Apr. 2020",
    title: `A Discount Cartridge Is Better Ever.`,
    desc: `Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..`,
    routePath: "/blog-details",
  },
  {
    img: "media_25",
    date: "23 Apr. 2020",
    title: `Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip
    exea.`,
    desc: `Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..`,
    routePath: "/blog-details",
  },
  {
    img: "media_26",
    date: "23 Apr. 2020",
    title: `Excepteur sint occaat cupidatat proidet nisi sunt in culpa
    `,
    desc: `Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..`,
    routePath: "/blog-details",
  },
  {
    img: "media_27",
    date: "23 Apr. 2020",
    title: `A Discount Cartridge Is Better Ever.`,
    desc: `Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..`,
    routePath: "/blog-details",
  },
];

const BlogStyle3 = () => {
  return (
    <>
      {BlogContent.map((item, i) => (
        <div className="post-meta" key={i}>
          <img
            src={`images/blog/${item.img}.png`}
            alt="media"
            className="image-meta"
          />
          <div className="post">
            <div className="date">{item.date}</div>
            <h3>
              <Link to="/blog-details" className="title">
                {item.title}
              </Link>
            </h3>
            <p>{item.desc}</p>
            <Link
              to={item.routePath}
              className="read-more d-flex justify-content-between align-items-center"
            >
              <span>Continue Reading</span>
              <i className="flaticon-right-arrow"></i>
            </Link>
          </div>
          {/* End post */}
        </div>
        // /.post-meta
      ))}
    </>
  );
};

export default BlogStyle3;
