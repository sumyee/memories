import React, { useState } from "react";
import TopLogo from "@components/top-logo/index.jsx";
import BottomImg from "@components/bottom-img/index.jsx";
import draw from "./ draw";

import BgImg from "@static/images/invitation_bg.jpg";
import NameInputImg from "@static/images/name_input_img.png";
import NextBtn from "@static/images/next_btn.png";
import BackBtn from "@static/images/back_btn.png";
import SaveBtn from "@static/images/save_btn.png";

import "./index.less";
import { postInfo } from "@service/index";

const NAME_MAX_LEN = 15;

const Invitation = props => {
  const [showPoster, setShowPoster] = useState(false);
  const [name, setName] = useState("");
  const [base64, setBase64] = useState("");
  const [lock, setLock] = useState(false);

  const postData = () => {
    postInfo({
      name: name,
      question1: sessionStorage.getItem("input1"),
      question2: sessionStorage.getItem("input2")
    });
  };

  const renderInput = () => {
    return (
      <div className="name-input-container">
        <p className="input-title">输入您的名字 生成邀请函</p>
        <div className="name-input-wrap">
          <img src={NameInputImg} className="name-input-bg" />
          <input
            type="text"
            className="name-input"
            maxLength={NAME_MAX_LEN}
            onInput={e => setName(e.target.value)}
          />
        </div>
      </div>
    );
  };

  const renderPoster = () => {
    return (
      <div className="poster-wrap">
        <img
          src={base64}
          className="poster-img animate__animated animate__fadeIn"
        />

        <div className="poster-btns">
          {/* <img src={SaveBtn} className="save-btn" /> */}
          <p style={{ fontSize: "10px", lineHeight: "25px" }}>长按保存图片</p>
          <img
            src={NextBtn}
            className="next-btn"
            onClick={() => {
              props.nextPage && props.nextPage();
            }}
          />
        </div>
      </div>
    );
  };

  const handleNext = () => {
    if (!name) {
      console.log("填写名字");
      return;
    }
    if(lock) return;
    setLock(true);
    sessionStorage.setItem("name", name);
    draw(name, base64 => {
      setBase64(base64);
      setShowPoster(true);
      postData();
      setLock(false);
    });
  };

  const handleBack = () => {
    props.backPage && props.backPage();
  }

  return (
    <>
      <div
        className="page-wrap invitation-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <TopLogo />

        {!showPoster && renderInput()}

        {showPoster && renderPoster()}

        {!showPoster && (
          <>
            <div className="name-input-btns">
              <img src={BackBtn} className="back-btn" onClick={handleBack} />
              <img src={NextBtn} className="next-btn" onClick={handleNext} />
            </div>
          </>
        )}

        <canvas id="canvas" style={{ display: "none" }}></canvas>

        <BottomImg />
      </div>
    </>
  );
};

export default Invitation;
