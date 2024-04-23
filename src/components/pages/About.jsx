import React from "react";

const About = () => {
  return (
    <>
      <div className="container about">
        <div className="about_img ">
          <img
            src="./images/man.png"
            alt="profile_photo"
            data-aos="fade-down-right"
          />
        </div>

        <div className="about_content" data-aos="fade-down-left">
          <h2 data-aos="zoom-in-down">About Me</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur
          </p>
          <p>
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor si voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
          </p>
          <button>Download CV</button>
          {/* <button className="primaryBtn">Download CV</button> */}
        </div>
      </div>
    </>
  );
};

export default About;
