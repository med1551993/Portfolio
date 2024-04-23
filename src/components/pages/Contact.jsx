import React from "react";
import { contact } from "../data/dummydata";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <h2 data-aos="zoom-in-down">Keep In Touch</h2>
          <div className="content">
            <div className="left">
              <form>
                <div className="flex">
                  <input type="text" placeholder="Name" data-aos="flip-left" />
                  <input
                    type="email"
                    placeholder="Email"
                    data-aos="flip-right"
                  />
                </div>
                <input type="text" placeholder="Subject" data-aos="flip-up" />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  data-aos="flip-down"
                ></textarea>
                <button data-aos="zoom-in-up">Submit</button>
              </form>
            </div>
            <div className="right">
              {contact.map((item) => (
                <div className="box" key={item.id} data-aos="zoom-in">
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
