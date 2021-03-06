import React, { useEffect, useState } from 'react';
import { countdown } from '@utils/index';
import CONSTANT from '@constant/index';
import TimeBoxBg from '@static/images/time_box.png';

import './index.less';

const CutDown = (props) => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const ctd = countdown(null, CONSTANT.LIVE_START_TIME);
      if (!ctd) {
        clearInterval(timer);
        props.timeEnd && props.timeEnd();
        return;
      }
      setTime(ctd);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <section className="time-cutdown">
      {/* {Number(time && time.day) > 0 && (
        <div className="time-box-wrap">
          <div
            className="time-box"
            style={{ backgroundImage: `url(${TimeBoxBg})` }}
          >
            <p className="time-text">{time ? time.day : '-'}</p>
          </div>
          <p className="time-unit">DAYS</p>
        </div>
      )} */}
      <div className="time-box-wrap">
          <div
            className="time-box"
            style={{ backgroundImage: `url(${TimeBoxBg})` }}
          >
            <p className="time-text">{time ? time.day : '-'}</p>
          </div>
          <p className="time-unit">DAYS</p>
        </div>
      <div className="time-box-wrap">
        <div
          className="time-box"
          style={{ backgroundImage: `url(${TimeBoxBg})` }}
        >
          <p className="time-text">{time ? time.hours : '-'}</p>
        </div>
        <p className="time-unit">HOURS</p>
      </div>
      <div className="time-box-wrap">
        <div
          className="time-box"
          style={{ backgroundImage: `url(${TimeBoxBg})` }}
        >
          <p className="time-text">{time ? time.minutes : '-'}</p>
        </div>
        <p className="time-unit">MINUTES</p>
      </div>
      {/* {Number(time && time.day) <= 0 && (
        <div className="time-box-wrap">
          <div
            className="time-box"
            style={{ backgroundImage: `url(${TimeBoxBg})` }}
          >
            <p className="time-text">{time ? time.seconds : '-'}</p>
          </div>
          <p className="time-unit">SECONDS</p>
        </div>
      )} */}
    </section>
  );
};

export default CutDown;
