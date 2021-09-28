import React, { useEffect } from "react";
import BgImg from "@static/images/welcome_bg.jpg";
import TopImg from "@static/images/welcome_top_img.png";
import MainImg from "@static/images/welcome_main_img.png";
import BottomImg from "@static/images/welcome_bottom_img.png";
import "./index.less";

const Welcome = (props) => {
  
  useEffect(() => {
    setTimeout(() => {
      console.log(props);
      if(props && props.nextPage) {
        props.nextPage()
      }
    }, 3000);
  }, [])

  return (
    <>
      <div
        className="welcome-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <img className="welcome-top-img" src={TopImg} alt="roaringwild" />
        <img className="welcome-main-img" src={MainImg} alt="roaringwild" />
        <img
          className="welcome-bottom-img safe-margin-bottom"
          src={BottomImg}
          alt="roaringwild"
        />
      </div>
    </>
  );
};

export default Welcome;
