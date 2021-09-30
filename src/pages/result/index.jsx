import React, { useState } from 'react';
import BgImg from '@static/images/questions_bg.jpg';
import BackNextBtn from '@components/back-next-btn/index.jsx';
import BottomImg from '@components/bottom-img/index.jsx';

import PlayBtn from '@static/images/play_btn.png';
import StopBtn from '@static/images/stop_btn.png';
import './index.less';

const MUSIC_RESULT = ['aaaa', 'aaab', 'abaa', 'abbb', 'abbd'];

const Result = (props) => {
  console.log(props.selected);
  console.log(resultPoster);
  const [playing, setPlaying] = useState(false);
  const isAudio = MUSIC_RESULT.includes(props.selected);

  const resultPoster = require(`@static/images/results/${props.selected}.jpg`);

  
  const handlePlay = () => {
    const audioFile = require(`@static/music/${props.selected}.mp3`).default;
    const audio = new Audio(audioFile);
    audio.play();
    setPlaying(true);
  };

  const handleStop = () => {
    audio.pause();
    setPlaying(false);
  };

  const handleBack = () => {};

  const handleNext = () => {};

  return (
    <>
      <div
        className="page-wrap result-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="poster-wrap">
          <img
            className="result-img"
            src={resultPoster.default}
            alt="roaringwild"
          />
          {isAudio && !playing && (
            <img src={PlayBtn} className="audio-btn" onClick={handlePlay} />
          )}
          {isAudio && playing && (
            <img src={StopBtn} className="audio-btn" onClick={handleStop} />
          )}
        </div>

        <div className="bottom-btn">
          <BackNextBtn />
        </div>

        <BottomImg />
      </div>
    </>
  );
};

export default Result;
