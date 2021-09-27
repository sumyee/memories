import React from "react";
import Bg1 from "@static/images/bg_1.jpg";
import TopImg from "@static/images/welcome_top_img.png";
import MainImg from "@static/images/welcome_main_img.png";
import BottomImg from "@static/images/welcome_bottom_img.png";
import "./index.less";

const Welcome = () => {
  return (
    <>
      <div
        className="welcome-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${Bg1})` }}
      >
        <img className="welcome-top-img" src={TopImg} alt="" />
        <img className="welcome-main-img" src={MainImg} alt="" />
        <img
          className="welcome-bottom-img safe-margin-bottom"
          src={BottomImg}
          alt=""
        />
      </div>
    </>
  );
};

export default Welcome;
