import React, { useEffect, useState } from "react";
import QuestionsBg from "@static/images/questions_bg.jpg";
import { questionList } from "./const";
import TopLogo from "@components/top-logo/index.jsx";
import BottomImg from "@components/bottom-img/index.jsx";

import { stage3 } from '@utils/index';
import { postInfo } from "@service/index";

import EntryImg from "@static/images/entry_img.png";
import BackBtn from "@static/images/back_btn.png";
import NextBtn from "@static/images/next_btn.png";
import SelectBg from "@static/images/select_bg.png";
import SelectedBg from "@static/images/selected_bg.png";
import InputBoxBg from "@static/images/input_box_bg.png";
import MemoriesBtn from "@static/images/memories_btn.png";
import "./index.less";

const INDEX_LETTER = ["A", "B", "C", "D"];

const Questions = props => {
  const [step, setStep] = useState(-1);
  const [selectedList, setSelectedList] = useState([]);
  const [canClick, setCanClick] = useState(false);

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const changeClick = () => {
    setCanClick(false);
    setTimeout(() => {
      setCanClick(true);
    }, 3500);
  }

  const handleSelect = index => {
    const list = selectedList.slice();
    list[step] = INDEX_LETTER[index].toLowerCase();
    setSelectedList(list);

    changeClick();
   
    setTimeout(() => {
      handleNextStep();
    }, 800);
  };

  const handleCreateMemories = () => {
    console.log(input1, input2);
    if(stage3()){
      postInfo({
        name: sessionStorage.getItem('name') || '',
        question1: input1,
        question2: input2,
      }) 
    } else {
      sessionStorage.setItem("input1", input1);
      sessionStorage.setItem("input2", input2);
    }
    props.nextPage && props.nextPage(selectedList.join(""));
  };

  const handleStopMusic = () => {
    const audio = document.getElementById("bgAudio");
    audio.pause();
  };

  useEffect(() => {
    changeClick()
  }, [])

  const renderEntry = () => {
    return (
      <>
        <img
          className="questions-center-img"
          src={EntryImg}
          alt="roaringwild"
          onClick={() => handleNextStep()}
        />
        {/* <img
          className="questions-next-img"
          src={NextBtn}
          onClick={() => handleNextStep()}
        /> */}
      </>
    );
  };

  const renderQuestion = () => {
    const question = questionList[step];

    return (
      <div
        className={`question-cont welcome-wrap animate__animated animate__fadeIn ${
          step === 3 ? "set-font-size" : ""
        }`}
      >
        <p className="question-mark">QUESTION：</p>

        {question.title.map((text, index) => (
          <p
            className={`question-title animate__animated animate__fadeInUp animate__delay-${
              index + 1
            }s`}
            key={index}
          >
            {text}
          </p>
        ))}

        <div className="select-box-wrap animate__animated animate__fadeIn animate__delay-3s">
          {question.answers.map((answer, index) => (
            <div
              className={`select-box tap-active ${
                selectedList[step] === INDEX_LETTER[index].toLowerCase()
                  ? "selected"
                  : ""
              }`}
              key={index}
              onClick={() => {
                if(!canClick) return;
                handleSelect(index)
              }
            }
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

        <div className="question-btns animate__animated animate__fadeIn animate__delay-4s">
          <img
            src={BackBtn}
            className="back-btn tap-active"
            onClick={() => {
              handleBack();
            }}
          />
        </div>
      </div>
    );
  };

  const renderQuestion1 = () => {
    return renderQuestion();
  };
  const renderQuestion2 = () => {
    return renderQuestion();
  };
  const renderQuestion3 = () => {
    return renderQuestion();
  };
  const renderQuestion4 = () => {
    return renderQuestion();
  };

  const renderInput1 = () => {
    return (
      <div className="question-cont welcome-wrap input-question animate__animated animate__fadeIn">
        <p className="question-mark">QUESTION：</p>
        <p className="question-title animate__animated animate__fadeIn animate__delay-1s">
          回忆对你而言，意味着什么？
        </p>
        <div className="input-box-wrap animate__animated animate__fadeIn animate__delay-2s">
          <img src={InputBoxBg} className="input-box-bg" />
          <textarea
            name=""
            id=""
            rows="3"
            value={input1}
            onInput={e => setInput1(e.target.value)}
          ></textarea>
        </div>

        <div className="question-btns animate__animated animate__fadeIn animate__delay-3s">
          <img src={BackBtn} className="back-btn" onClick={handleBack} />
          <img
            src={NextBtn}
            className="next-btn"
            onClick={() => {
              const val = input1.trim();
              if (!val) {
                alert("嘿！简单写写吧，我们真的很想知道。");
                return;
              }
              handleNextStep();
            }}
          />
        </div>
      </div>
    );
  };

  const renderInput2 = () => {
    return (
      <div className="question-cont welcome-wrap input-question animate__animated animate__fadeIn">
        <p className="question-mark">QUESTION：</p>
        <p className="question-title animate__animated animate__fadeIn animate__delay-1s">
          可以分享一段你难忘的回忆吗？(•͈˽•͈)
        </p>
        <div className="input-box-wrap animate__animated animate__fadeIn animate__delay-2s">
          <img src={InputBoxBg} className="input-box-bg" />
          <textarea
            name=""
            id=""
            rows="3"
            value={input2}
            onInput={e => setInput2(e.target.value)}
          ></textarea>
        </div>

        <div className="question-btns animate__animated animate__fadeIn animate__delay-3s">
          <img src={BackBtn} className="back-btn" onClick={handleBack} />
          <img
            src={MemoriesBtn}
            className="memories-btn"
            onClick={() => {
              const val = input2.trim();
              if (!val) {
                alert("嘿！简单写写吧，我们真的很想知道。");
                return;
              }
              handleStopMusic();
              handleCreateMemories();
            }}
          />
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
        {/* {step > -1 && step < 4 && renderQuestion()} */}
        {step === 0 && renderQuestion1()}
        {step === 1 && renderQuestion2()}
        {step === 2 && renderQuestion3()}
        {step === 3 && renderQuestion4()}
        {step === 4 && renderInput1()}
        {step === 5 && renderInput2()}

        <BottomImg />
      </div>
    </>
  );
};

export default Questions;
