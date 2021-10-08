import React, { useEffect, useState } from "react";
import BgImg from "@static/images/questions_bg.jpg";
import BottomImg from "@components/bottom-img/index.jsx";
import { stage3 } from '@utils/index';

import PlayBtn from "@static/images/play_btn.png";
import StopBtn from "@static/images/stop_btn.png";
import NextBtn from "@static/images/next_btn.png";
import "./index.less";

const MUSIC_RESULT = ["aaaa", "aaab", "abaa", "abbb", "abbd"];

const Result = props => {
  const [playing, setPlaying] = useState(false);

  const isAudio = MUSIC_RESULT.includes(props.selected);

  const resultPoster = require(`@static/images/results/${props.selected}.jpg`);

  const handlePlay = () => {
    const audio = document.getElementById("audio");
    audio.play();
    setPlaying(true);
  };

  const handleStop = () => {
    const audio = document.getElementById("audio");
    audio.pause();
    setPlaying(false);
  };

  const handleNext = () => {
    props.nextPage && props.nextPage();
  };

  const handleStopBgMusic = () => {
    const audio = document.getElementById("bgAudio");
    audio.pause();
  };

  useEffect(() => {
    if(isAudio) {
      handleStopBgMusic();
    }
  }, [])

  return (
    <>
      <div
        className="page-wrap result-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="poster-wrap">
          <img
            className="result-img animate__animated animate__fadeIn"
            src={resultPoster.default}
            alt="roaringwild"
          />
          {isAudio && !playing && (
            <img src={PlayBtn} className="audio-btn" style={{top: props.selected === 'abaa' ? '41%' : '43%'}} onClick={handlePlay} />
          )}
          {isAudio && playing && (
            <img src={StopBtn} className="audio-btn" style={{top: props.selected === 'abaa' ? '41%' : '43%'}} onClick={handleStop} />
          )}
        </div>

        <div className="bottom-btns">
          <p style={{ fontSize: "10px", lineHeight: "25px" }}>长按保存图片</p>
          {!stage3() && (<img src={NextBtn} className="bottom-btn" onClick={handleNext} />)}
        </div>

        <BottomImg />
      </div>
      {isAudio && (
        <audio
          src={require(`@static/music/${props.selected}.mp3`).default}
          controls="controls"
          preload="true"
          id="audio"
          hidden
        ></audio>
      )}
    </>
  );
};

export default Result;
