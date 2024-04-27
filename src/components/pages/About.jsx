import React from "react";

const About = () => {
  return (
    <>
      <div className="container about">
        <div className="about_img ">
          <img
            src="./images/man1.png"
            alt="profile_photo"
            data-aos="fade-down-right"
          />
        </div>

        <div className="about_content" data-aos="fade-down-left">
          <span>Who Am I ?</span>
          <h2 data-aos="zoom-in-down">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            blanditiis odit repellendus ducimus adipisci rem soluta totam sunt?
            Architecto rem perferendis consequuntur impedit aliquam aliquid
            aperiam ipsa blanditiis et error.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            qui, dolor sint maxime illum vitae enim vero et consectetur
            cupiditate tenetur consequatur perferendis eveniet quasi. Ut
            distinctio maxime totam corporis!
          </p>
          <button>Download CV</button>
          {/* <button className="primaryBtn">Download CV</button> */}
        </div>
      </div>
    </>
  );
};

export default About;
