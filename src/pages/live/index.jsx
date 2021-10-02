import React, { useEffect, useState } from "react";
import { getTime } from "@service/index";
import { countdown } from "@utils/index";
import CONSTANT from "@constant/index";
import Bg1 from "@static/images/welcome_bg.jpg";
import Logo from "@static/images/logo.png";
import PreLiveBg from "@static/images/pre_live_bg.png";

import CutDown from './components/CutDown/index.jsx'

import TopLogo from '@components/top-logo/index.jsx';
import BottomImg from '@components/bottom-img/index.jsx';

import "./index.less";

const PreLive = props => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    // getTime().then((res) => {
    //   console.log(res);
    //   const cd = countdown(null, CONSTANT.LIVE_PREV_TIME)
    //   console.log(cd);
    // });
    // setTimeout(() => {
    //   props.nextPage && props.nextPage()
    // }, 5000)
    // const timer = setInterval(() => {
    //   countdown(null, CONSTANT.LIVE_PREV_TIME);
    // }, 1000);

    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  const renderCountdown = () => {
    setInterval(() => {
      countdown(null, CONSTANT.LIVE_PREV_TIME);
    }, 1000);
  };

  return (
    <>
      <div
        className="page-wrap live-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${Bg1})` }}
      >
        <TopLogo />

        <div className="time-wrap">
          <CutDown />

          <div className="live-box">
            <img src={PreLiveBg} className="pre-live-bg" />
          </div>
        </div>

        {/* <iframe
          src="https://play.yunxi.tv/livestream/embed-player?id=0a345f1063574f9e82d4553a6a1b8c92&auth_key=ba20149b2da626478104c433bb487966"
          width="640"
          height="480 "
        ></iframe> */}

        <BottomImg />
      </div>
    </>
  );
};

export default PreLive;
