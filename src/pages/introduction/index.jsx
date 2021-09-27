import React from "react";
import Bg1 from "@static/images/bg_1.jpg";
import Logo from "@static/images/logo.png";
import "./index.less";

const Introduction = () => {
  return (
    <>
      <div
        className="introduction-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${Bg1})` }}
      >
        <img className="introduction-main-img" src={Logo} alt="" />
      </div>
    </>
  );
};

export default Introduction;
