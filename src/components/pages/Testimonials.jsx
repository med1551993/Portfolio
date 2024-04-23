import { FormatQuote } from "@mui/icons-material";
import React from "react";
import { testimonials } from "../data/dummydata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="testimonials">
        <div className="container">
          <Slider {...settings}>
            {testimonials.map((item) => (
              <div className="testimonial_box" key={item.id}>
                <i data-aos="zoom-out-up">
                  <FormatQuote />
                </i>
                <p data-aos="zoom-out-down">{item.text}</p>
                <div className="img" data-aos="zoom-out-right">
                  <img src={item.image} alt="img" />
                </div>
                <h3 data-aos="zoom-out-left">{item.name}</h3>
                <label data-aos="zoom-out">{item.post}</label>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
