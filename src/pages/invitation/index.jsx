import React from 'react';
import TopLogo from '@components/top-logo/index.jsx';
import BottomImg from '@components/bottom-img/index.jsx';

import BgImg from '@static/images/invitation_bg.jpg';
import NameInputImg from '@static/images/name_input_img.png';

import './index.less';

const Invitation = () => {
  const renderInput = () => {
    return (
      <div className="name-input-container">
        <p className="input-title">输入您的名字 生成邀请函</p>
        <div className="name-input-wrap">
          <img src={NameInputImg} className="name-input-bg" />
          <input type="text" className="name-input" />
        </div>
      </div>
    );
  };
  return (
    <>
      <div
        className="page-wrap invitation-wrap animate__animated animate__fadeIn"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <TopLogo />

        {renderInput()}

        <BottomImg />
      </div>
    </>
  );
};

export default Invitation;
