import React, { useEffect, useState } from 'react';
import QuestionsBg from '@static/images/questions_bg.jpg';
import { questionList } from './const';
import TopLogo from '@components/top-logo/index.jsx';
import BottomImg from '@components/bottom-img/index.jsx';

import EntryImg from '@static/images/entry_img.png';
import BackBtn from '@static/images/back_btn.png';
import NextBtn from '@static/images/next_btn.png';
import SelectBg from '@static/images/select_bg.png';
import SelectedBg from '@static/images/selected_bg.png';
import './index.less';

const INDEX_LETTER = ['A', 'B', 'C', 'D'];

const Questions = (props) => {
  const [step, setStep] = useState(-1);
  const [selectedList, setSelectedList] = useState([]);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSelect = (index) => {
    console.log(step, index, INDEX_LETTER[index].toLowerCase());
    const list = selectedList.slice();
    list[step] = INDEX_LETTER[index].toLowerCase();
    setSelectedList(list);
    if (step === 3) {
      return;
    }
    setTimeout(() => {
      handleNextStep();
    }, 300);
  };

  useEffect(() => {
    console.log(selectedList);
    if (selectedList.length === 4) {
      console.log(selectedList.join(''));
      props.nextPage && props.nextPage(selectedList.join(''));
    }
  }, [selectedList]);

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
          onClick={() => handleNextStep()}
        />
      </>
    );
  };

  const renderQuestion = () => {
    const question = questionList[step];
    console.log(question);
    return (
      <div className={`question-cont welcome-wrap animate__animated animate__fadeIn ${step === 3 ? 'set-font-size' : ''}`}>
        <p className="question-mark">QUESTION：</p>

        {question.title.map((text, index) => (
          <p className="question-title" key={index}>
            {text}
          </p>
        ))}

        <div className="select-box-wrap">
          {question.answers.map((answer, index) => (
            <div
              className={`select-box ${
                selectedList[step] === INDEX_LETTER[index].toLowerCase()
                  ? 'selected'
                  : ''
              }`}
              key={index}
              onClick={() => handleSelect(index)}
            >
              {selectedList[step] === INDEX_LETTER[index].toLowerCase() ? (
                <img src={SelectedBg} className="select-bg" />
              ) : (
                <img src={SelectBg} className="select-bg" />
              )}
              <p className="select-text">
                {`${INDEX_LETTER[index]}. `}
                {answer}
              </p>
            </div>
          ))}
        </div>

        <div className="question-btns">
          <img src={BackBtn} className="back-btn" onClick={handleBack} />
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

        {step === -1 && renderEntry()}
        {step > -1 && step < 4 && renderQuestion()}

        <BottomImg />
      </div>
    </>
  );
};

export default Questions;
