import React, { useEffect, useState } from "react";
import { getTime } from "@service/index";
import { isPrevLive, isLiving, isLived, stage3 } from "@utils/index";
import CONSTANT from "@constant/index";
import NextBtn from "@static/images/next_btn.png";
import BackBtn from "@static/images/back_btn.png";
import Bg1 from "@static/images/welcome_bg.jpg";
import PreLiveBg from "@static/images/pre_live_bg.png";

import CutDown from "./components/CutDown/index.jsx";

import TopLogo from "@components/top-logo/index.jsx";
import BottomImg from "@components/bottom-img/index.jsx";

import "./index.less";

const PreLive = props => {
  const [step, setStep] = useState(1);
  const [startLive, setStartLive] = useState(false);

  const hanleBack = () => {
    props.backPage && props.backPage();
  };

  useEffect(() => {
    console.log(isPrevLive(), isLiving(), isLived());
  }, []);

  const handleTimeEnd = () => {
    console.log('handleTimeEnd');
    setStartLive(true)
  };

  return (
    <>
      <div
        className="page-wrap live-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${Bg1})` }}
      >
        <TopLogo />

        <div className="time-wrap">
          {isPrevLive() && <CutDown timeEnd={handleTimeEnd} />}

          <div className="live-box">
            {(isPrevLive() && !startLive) && <img src={PreLiveBg} className="pre-live-bg" />}
            {(startLive || isLiving()) && (
              <iframe src="https://play.yunxi.tv/livestream/embed-player?id=0a345f1063574f9e82d4553a6a1b8c92&auth_key=ba20149b2da626478104c433bb487966"></iframe>
            )}
          </div>

          <div className="bottom-btns">
            <img src={BackBtn} className="back-btn" onClick={hanleBack} />
            {/* <img src={NextBtn} className="next-btn" /> */}
          </div>
        </div>

        <BottomImg />
      </div>
    </>
  );
};

export default PreLive;
