import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Services.scss";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "services"]';

    client.fetch(query).then((data) => {
      setServices(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Services</h2>

      <div className="app__services-container">
        <motion.div className="app__services-list">
          {services.map((service) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__services-item app__flex"
              key={service.name}
            >
              <div
                className="app__flex"
                // style={{ backgroundColor: service.bgColor }}
              >
                <img src={urlFor(service.icon)} alt={service.name} />
                <h3>{service.name}</h3>
                <p className="p-text">{service.details}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Services, "app__services"),
  "services",
  "app__whitebg"
);
