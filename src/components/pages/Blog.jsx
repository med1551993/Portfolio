import React from "react";
import { blog } from "../data/dummydata";
const Blog = () => {
  return (
    <>
      <div className="blog">
        <div className="container">
          <h2 data-aos="zoom-in-down">Blog</h2>
          <div className="content grid3">
            {blog.map((item) => (
              <div className="blog_card" key={item.id} data-aos="flip-left">
                <div className="img" data-aos="fade-up">
                  <img src={item.cover} alt="cover" data-aos="fade-down" />
                </div>
                <div className="text">
                  <h3 data-aos="fade-right">{item.title}</h3>
                  <label data-aos="fade-left">
                    By {item.author} {item.date}
                  </label>
                  <p data-aos="fade-up-right">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
