import React, { useEffect, useState } from "react";
import { getTime } from "@service/index";
import { countdown } from "@utils/index";
import IntroductionBg from "@static/images/introduction_bg.jpg";
import Logo from "@static/images/logo.png";
import NextBtn from "@static/images/next_btn.png";
import BackBtn from "@static/images/back_btn.png";
import MemoriesText from "@static/images/memories_text.png";
import Ss22Text from "@static/images/ss22_text.png";
import "./index.less";

const Introduction = props => {
  const [step, setStep] = useState(1);

  useEffect(() => {}, []);

  const handleStep = () => {
    if (step < 7) {
      setStep(step + 1);
    } else {
      props.nextPage && props.nextPage('questions');
    }
  };
  
  const handleBack = (e) => {
    e.stopPropagation()
    console.log(step);
    if(step > 1) {
      setStep(step - 1);
    } else {
      props.nextPage && props.nextPage('welcome');
    }
  };

  const step1 = () => (
    <>
      {(step >= 1 && step <= 3) && (
        <div className="animate__animated animate__fadeIn">
          关于回忆，模糊而清晰。
        </div>
      )}
      {(step >= 2 && step <= 3) && (
        <div className="animate__animated animate__fadeIn middle-text">
          掺杂着很多复杂的情绪，但大体是美好和暖色的。
        </div>
      )}
      {(step === 3) && (
        <div className="animate__animated animate__fadeIn">
          但是这份美好是否是客观真实的呢？
        </div>
      )}
    </>
  );

  const step2 = () => (
    <>
      {(step >= 4 && step <= 6) && (
        <div className="animate__animated animate__fadeIn">
          回看当下的生活，我们依稀觉得很多事物已经只存
          <br />
          在于回忆之中。
        </div>
      )}
      {(step >= 5 && step <= 6) && (
        <div className="animate__animated animate__fadeIn middle-text">
          我们一直在感叹那所谓的黄金年代逐渐远去，这些轻<br />忽缥缈的情感，好似流动的思绪，细微的梦般萦绕。
        </div>
      )}
      {step === 6 && (
        <div className="animate__animated animate__fadeIn">
          但这失真、朦胧的回忆或许只是对于逝去之物的一种<br />美好臆想？
        </div>
      )}
    </>
  );

  const step3 = () => (
    <>
      {step === 7 && (
        <div className="animate__animated animate__fadeIn step3-text">
          我们基于自身的回忆，会对未来产生蝴蝶效应般的影<br />响。当我们停留在主观的美好回忆当中，对于未来我们<br />是否还会有更多的憧憬？
        </div>
      )}
    </>
  );

  // const renderStep = [step1, step2, step3];
  // const handleClick = () => {
  //   console.log(step);
  // };

  return (
    <>
      <div
        className="page-wrap introduction-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${IntroductionBg})` }}
        onClick={handleStep}
      >
        <img
          className="introduction-main-img"
          src={Logo}
          alt="roaringwild"
          className="top-logo"
        />

        {/* {renderStep[step] && renderStep[step]()} */}
        <section className="text-wrap">
          {[1, 2, 3].includes(step) && step1()}
          {[4, 5, 6].includes(step) && step2()}
          {[7].includes(step) && step3()}
        </section>

        <img
          src={BackBtn}
          alt="roaringwild"
          className="next-btn"
          onClick={handleBack}
        />

        <div className="bottom-text-img">
          <img src={MemoriesText} alt="" />
          <img src={Ss22Text} alt="" />
        </div>
      </div>
    </>
  );
};

export default Introduction;
