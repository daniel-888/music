import React from "react";
import { Link } from "react-router-dom";

const BlogContent = [
  {
    img: "media_32",
    title: `7 reasons Deski is best deski...`,
    author: "Jannatul Ekra",
    designation: "Designe Guru",
    animationDealy: "",
  },
  {
    img: "media_33",
    title: `What’s the process of our selling ticket. `,
    author: "Alison Ja",
    designation: "CEO",
    animationDealy: "100",
  },
  {
    img: "media_34",
    title: `Managment & security process..`,
    author: "Hasan",
    designation: "Designe Guru",
    animationDealy: "200",
  },
];

const BlogStyle5 = () => {
  return (
    <>
      {BlogContent.map((val, i) => (
        <div
          className="col-lg-4"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDealy}
          key={i}
        >
          <div className="feature-article-meta">
            <div className="img-meta">
              <img src={`images/blog/${val.img}.jpg`} alt="media" />
            </div>
            <div className="post-meta">
              <h3>
                <Link to="/blog-details">{val.title}</Link>
              </h3>
              <div className="author_info">
                {val.author}. <span>{val.designation}</span>
              </div>
            </div>
          </div>
          {/* /.feature-article-meta */}
        </div>
      ))}
    </>
  );
};

export default BlogStyle5;
