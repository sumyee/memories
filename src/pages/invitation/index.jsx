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

const NAME_MAX_LEN = 15;

const Invitation = () => {
  const [showPoster, setShowPoster] = useState(false);
  const [name, setName] = useState("");
  const [base64, setBase64] = useState("");

  const postData = () => {
    console.log('...');
  }

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

        {/* <iframe
          src="https://play.yunxi.tv/pages/8d18b4458ab14610b7e60a6f6ce929f8"
          frameBorder="0"
        ></iframe> */}
      </div>
    );
  };

  const renderPoster = () => {
    return (
      <div className="poster-wrap">
        <img src={base64} className="poster-img" />

        <div className="poster-btns">
          <img src={SaveBtn} className="save-btn" />
          <img src={NextBtn} className="next-btn" onClick={handleNext} />
        </div>
      </div>
    );
  };

  const handleNext = () => {
    if (!name) {
      console.log(2333333);
      return;
    }
    postData()
    draw(name, base64 => {
      setBase64(base64);
      setShowPoster(true);
    });
  };

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
              <img src={BackBtn} className="back-btn" />
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
