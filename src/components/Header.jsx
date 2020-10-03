import React from "react";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const Header = () => {
  return (
    <header>
      <h1>
        <FaReact /> AUTH <SiFirebase />
      </h1>
      <h3>React & Firebase authentication</h3>
      <small>back to the guide</small>
    </header>
  );
};

export default Header;
