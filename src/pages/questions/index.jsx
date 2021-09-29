import React, { useEffect, useState } from "react";
import QuestionsBg from "@static/images/questions_bg.jpg";
import { questionList } from "./const";
import TopLogo from "@components/top-logo/index.jsx";
import BottomImg from "@components/bottom-img/index.jsx";

import EntryImg from "@static/images/entry_img.png";
import NextBtn from "@static/images/next_btn.png";
import SelectBg from '@static/images/select_bg.png';
import "./index.less";

const Questions = props => {
  const [step, setStep] = useState(0);

  const handleNextStep = step => {
    setStep(step);
  };

  const renderEntry = () => {
    return (
      <>
        <img
          className="questions-center-img"
          src={EntryImg}
          alt="roaringwild"
        />
        <img
          className="questions-next-img"
          src={NextBtn}
          onClick={() => handleNextStep(1)}
        />
      </>
    );
  };

  const renderQuestion1 = () => {
    return (
      <div className="question-cont">
        <p className="question-mark">QUESTION：</p>
        <p className="question-title">
          最近吧，周遭发生了好多好多变化，曾经觉得不可想象的情景现在包围了每一个人，反观过去却显得有些许的不真实。
        </p>
        <p className="question-title">
          话虽如此，回忆大体上依旧是美好而温暖的，你是否和我一样会想念那些逝去的时光？
        </p>

        <div>
          <div className="select-box">
            <img src={SelectBg} alt="" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="page-wrap questions-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${QuestionsBg})` }}
      >
        <TopLogo />

        {step === 0 && renderEntry()}
        {step === 1 && renderQuestion1()}

        <BottomImg />
      </div>
    </>
  );
};

export default Questions;
