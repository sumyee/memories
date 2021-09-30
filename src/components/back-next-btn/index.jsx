import React from 'react';

import BackBtn from '@static/images/back_btn.png';
import NextBtn from '@static/images/next_btn.png';

import './index.less';

const BackNextBtn = (props) => {
  const handleBack = () => {
    props.onBack && props.onBack();
  };

  const handleNext = () => {
    props.onNext && props.onNext();
  };

  return (
    <div className="back-next-btn">
      <img src={BackBtn} className="back-btn" onClick={handleBack} />
      <img src={NextBtn} className="next-btn" onClick={handleNext} />
    </div>
  );
};

export default BackNextBtn;
