import React, { useEffect, useState } from "react";
import { getTime } from "@service/index";
import { countdown } from "@utils/index";
import IntroductionBg from "@static/images/introduction_bg.jpg";
import Logo from "@static/images/logo.png";
import NextBtn from "@static/images/next_btn.png";
import MemoriesText from "@static/images/memories_text.png";
import Ss22Text from "@static/images/ss22_text.png";
import "./index.less";

const Introduction = props => {
  const [step, setStep] = useState(1);

  useEffect(() => {}, []);

  const handleStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      props.nextPage && props.nextPage();
    }
  };

  const step1 = () => (
    <>
      <div className="animate__animated animate__fadeIn animate__delay-1s">
        关于回忆，模糊而清晰，掺杂着很多复杂的情绪，但大
        <br />
        体是美好和暖色的。
      </div>
      <div className="animate__animated animate__fadeIn animate__delay-2s middle-text">
        但是这份暖色是否是真实的呢?关于回忆，模糊而清晰，
        <br />
        掺杂着很多复杂的情绪，但大体是美好和暖色的。
      </div>
      <div className="animate__animated animate__fadeIn animate__delay-3s">
        但是这份暖色是否是真实的呢?
      </div>
    </>
  );

  const step2 = () => (
    <>
      <div className="animate__animated animate__fadeIn animate__delay-1s">
        关于当下 关于本身人的主观去改变的回忆，这是好的
        <br />
        或是不好的处理方式呢?回归到当下的改变当中，我们
        <br />
        依稀的觉得其实已经有很多的东西变成了回忆。
      </div>
      <div className="animate__animated animate__fadeIn animate__delay-2s middle-text">
        但这部分我们一直在感叹过去美好的黄金年代依稀远
        <br />
        去了之后，关于未来我们是否有更多的憧憬。
      </div>
      <div className="animate__animated animate__fadeIn animate__delay-3s">
        还是说我们就是活在过去，我们是否接受被润化被美
        <br />
        化的回忆，主观的停留在美好当中
      </div>
    </>
  );

  const step3 = () => (
    <>
      <div className="animate__animated animate__fadeIn step3-text">
        基于本身的回忆对于未来的影响
      </div>
    </>
  );

  const renderStep = [step1, step2, step3];

  return (
    <>
      <div
        className="introduction-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${IntroductionBg})` }}
      >
        <img
          className="introduction-main-img"
          src={Logo}
          alt="roaringwild"
          className="top-logo"
        />

        {/* {renderStep[step] && renderStep[step]()} */}
        <section className="text-wrap">
          {step === 1 && step1()}
          {step === 2 && step2()}
          {step === 3 && step3()}
        </section>

        <img
          src={NextBtn}
          alt="roaringwild"
          className="next-btn"
          onClick={handleStep}
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
