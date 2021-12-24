import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <span>
          Designed and Developed By Hovsep Stepanian | All Rights Reserved ©
          {`${new Date().getFullYear()}`}
        </span>
      </footer>
    </div>
  );
};

export default Footer;
