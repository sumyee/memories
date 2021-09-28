import React, { useEffect, useState } from 'react';
import { getTime } from '@service/index';
import { countdown } from '@utils/index';
import Bg1 from '@static/images/welcome_bg.jpg';
import Logo from '@static/images/logo.png';
import './index.less';

const Introduction = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    getTime().then((res) => {
      console.log(res);
      // countdown(null, res.result.timestamp)
      const cd = countdown(null, '2021-10-01 00:00:00')

      // setInterval(() => {
      //   countdown(null, '2021-10-01 00:00:00')
      // }, 1000)
      console.log(cd);
    });
  }, []);

  const text1 = () => (
    <>
      <div className="animate__animated animate__fadeInUp animate__delay-1s">
        关于回忆，模糊而清晰，掺杂着很多复杂的情绪，但大体是美好和暖色的。
      </div>
      <div className="animate__animated animate__fadeInUp animate__delay-2s">
        但是这份暖色是否是真实的呢？关于回忆，模糊而清晰，掺杂着很多复杂的情绪，但大体是美好和暖色的。
      </div>
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        但是这份暖色是否是真实的呢？
      </div>
    </>
  );
  return (
    <>
      <div
        className="introduction-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${Bg1})` }}
      >
        <img className="introduction-main-img" src={Logo} alt="roaringwild" />
        {text1()}
      </div>
    </>
  );
};

export default Introduction;
