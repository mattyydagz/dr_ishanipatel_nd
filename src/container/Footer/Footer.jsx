import React, { useState } from "react";
import { MdEmail, MdPhone } from "react-icons/md";

//import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import "./Footer.scss";
import { IconContext } from "react-icons/lib";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, phone, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Get in Touch</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <IconContext.Provider
            value={{
              style: {
                fontSize: "250%",
                color: "#030343",
                paddingRight: "10px",
              },
            }}
          >
            <MdEmail />
          </IconContext.Provider>
          <a href="mailto:ishanipatelnd@gmail.com" className="p-text">
            ishanipatelnd@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <IconContext.Provider
            value={{
              style: {
                fontSize: "250%",
                color: "#030343",
                paddingRight: "10px",
              },
            }}
          >
            <MdPhone />
          </IconContext.Provider>
          <a href="tel:+1 (416) 417-1898" className="p-text">
            +1 (416) 417-1898
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="phone"
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={handleChangeInput}
              x
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "");
