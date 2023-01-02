import React from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const Header = () => {
  return (
    <div id="home" className="app__header">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp">
            <div>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Ishani Patel</h1>
              <p className="p-text">Naturopathic Doctor</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.portrait} alt="profile-bg" />
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Header, "app__header"),
  "home",
  "app__whitebg"
);
