import React, { useEffect, useState } from 'react';
import { getTime } from '@service/index';
import { countdown } from '@utils/index';
import CONSTANT from '@constant/index';
import Bg1 from '@static/images/welcome_bg.jpg';
import Logo from '@static/images/logo.png';
import './index.less';

const PreLive = (props) => {
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
    const timer = setInterval(() => {
      countdown(null, CONSTANT.LIVE_PREV_TIME);
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, []);

  const renderCountdown = () => {
    setInterval(() => {
      countdown(null, CONSTANT.LIVE_PREV_TIME);
    }, 1000);
  };

  return (
    <>
      <div
        className="pre-live-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${Bg1})` }}
      >
        <img className="pre-live-main-img" src={Logo} alt="roaringwild" />
      </div>
    </>
  );
};

export default PreLive;
