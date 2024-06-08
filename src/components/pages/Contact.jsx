import React from "react";
import { contact } from "../data/dummydata";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <h2 data-aos="zoom-in-down">Keep In Touch</h2>
          <div className="content">

              <div className="right">
                <h3>Let's get in touch</h3>
                <p>I'm open for any suggestion or just to have a chat</p>
                  {contact.map((item) => (
                      <div className="box1" key={item.id} data-aos="zoom-in">
                            <i>{item.icon}</i>
                            <p>{item.text1}</p>
                      </div>
                  ))}
              </div>

            <div className="left">
              <form>
                 <input type="text" placeholder="Name" data-aos="flip-up" /> 
                 <input type="text" placeholder="Email" data-aos="flip-up" /> 
                <textarea
                placeholder="Message"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  data-aos="flip-down"
                ></textarea>
                <button data-aos="zoom-in-up">Submit</button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
