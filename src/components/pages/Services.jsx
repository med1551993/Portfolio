import React from "react";
import { services } from "../data/dummydata";
const Services = () => {
  return (
    <>
      <div className=" services">
        <div className="container">
          <h2 data-aos="zoom-in-down">Services</h2>
          <div className="service_content grid3">
            {services.map((service, i) => (
              <div
                className="service_card"
                key={service.id}
                data-aos="flip-left"
              >
                <i>{service.icon}</i>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
