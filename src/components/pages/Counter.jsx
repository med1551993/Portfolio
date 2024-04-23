import React from "react";
import { project } from "../data/dummydata";
import CountUp from "react-countup";
const Counter = () => {
  return (
    <>
      <div className="counter">
        <div className="container grid4">
          {project.map((item) => (
            <div className="box" key={item.id} data-aos="zoom-in">
              <i>{item.icon}</i>

              <h1>
                <CountUp
                  end={item.num}
                  duration={2}
                  enableScrollSpy
                  separator=""
                />
              </h1>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Counter;
