import React from "react";
import "./logo192.png";

const Navbar = () => {
  return (
    <nav>
      <img src="./logo192.png" alt="React-Logo" className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">I 💗 React</h4>
    </nav>
  );
};

export default Navbar;
