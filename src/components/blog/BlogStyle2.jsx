import React from "react";
import { Link } from "react-router-dom";

const BlogContent = [
  {
    img: "media_16",
    tag: "Technology",
    title: `A Discount Cartridge Is Better Ever.`,
    desc: `Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..`,
    routePath: "/blog-details",
  },
  {
    img: "media_17",
    tag: "Software",
    title: `Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip
    exea.`,
    desc: `Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..`,
    routePath: "/blog-details",
  },
  {
    img: "media_20",
    tag: "Blog",
    title: `Excepteur sint occaat cupidatat proidet nisi sunt in culpa
    `,
    desc: `Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..`,
    routePath: "/blog-details",
  },
  {
    img: "media_18",
    tag: "Technology",
    title: `A Discount Cartridge Is Better Ever.`,
    desc: `Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..`,
    routePath: "/blog-details",
  },
  {
    img: "media_19",
    tag: "Software",
    title: `Quis Nostr Exercitation Ullamco Laboris nisi ut Aliquip
    exea.`,
    desc: `Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack bonnet arse over tit burke bugger all mate bodge..`,
    routePath: "/blog-details",
  },
];

const BlogStyle2 = () => {
  return (
    <>
      {BlogContent.map((item, i) => (
        <div className="post-meta" key={i}>
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
          <p>{item.desc}</p>
          <Link
            to={item.routePath}
            className="read-more d-flex justify-content-between align-items-center"
          >
            <span>Read More</span>
            <i className="flaticon-right-arrow"></i>
          </Link>
        </div>
        // /.post-meta
      ))}
    </>
  );
};

export default BlogStyle2;
