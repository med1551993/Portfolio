import React from "react";
import { home } from "../data/dummydata";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => (
          <div className="heroContainer" key={val.id}>
            <h3 data-aos="fade-right">{val.text}</h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="fade-left"> {val.desc}</p>
            {/* <button className="primaryBtn" data-aos="fade-up-right">
              Download CV
            </button> */}

            <div className="logos" data-aos="fade-up-right">
              <img src="./images/html.png" alt="html"/>
              <img src="./images/css.png" alt="css"/>
              <img src="./images/js.png" alt="js"/>
              <img src="./images/react.png" alt="react"/>
              <img src="./images/redux.png" alt="redux"/>
              <img src="./images/bootstrap.png" alt="bootstrap"/>
              <img src="./images/tailwind.png" alt="tailwind"/>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Hero;
