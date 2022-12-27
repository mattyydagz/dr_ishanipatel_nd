import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const SocailMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsInstagram />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <SiLinktree />
      </div>
    </div>
  );
};

export default SocailMedia;
