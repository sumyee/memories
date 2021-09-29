import React, { useEffect, useState } from 'react';
import QuestionsBg from '@static/images/questions_bg.jpg';
import { questionList } from './const';
import TopLogo from '@components/top-logo/index.jsx'
import BottomImg from '@components/bottom-img/index.jsx'

import EntryImg from '@static/images/entry_img.png';
import NextBtn from '@static/images/next_btn.png';
import './index.less';

const Questions = (props) => {
  const [step, setStep] = useState(0)

  const renderEntry = () => {
    return (
      <>
        <img
          className="questions-center-img"
          src={EntryImg}
          alt="roaringwild"
        />
        <img className="questions-next-img" src={NextBtn} alt="roaringwild" />
      </>
    );
  };

  const renderQuestion = () => {
    return (
      <>
        <img
          className="questions-center-img"
          src={EntryImg}
          alt="roaringwild"
        />
        <img className="questions-next-img" src={NextBtn} alt="roaringwild" />
      </>
    );
  };

  return (
    <>
      <div
        className="page-wrap questions-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${QuestionsBg})` }}
      >
        <TopLogo />

        {renderEntry()}

        <BottomImg />
      </div>
    </>
  );
};

export default Questions;
