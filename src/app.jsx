import React, { Suspense, useEffect, useState } from 'react';
import { isMobile, isPrevLive, stage1, stage2, stage3 } from '@utils/index';
import './app.less';

const emptyComp = <div></div>;
const Welcome = React.lazy(() => import('@pages/welcome/index.jsx'));
const Introduction = React.lazy(() => import('@pages/introduction/index.jsx'));
const Questions = React.lazy(() => import('@pages/questions/index.jsx'));
const Result = React.lazy(() => import('@pages/result/index.jsx'));
const Invitation = React.lazy(() => import('@pages/invitation/index.jsx'));
const Live = React.lazy(() => import('@pages/live/index.jsx'));

const checkStage = () => {
  if(stage1()) return 'welcome';
  if(stage2()) return 'live';
  if(stage3()) return 'welcome';
  return 'welcome'
}

const App = () => {
  const [Comp, setComp] = useState(emptyComp);
  const [selectedStr, setSelectedStr] = useState('');
  const [CompName, setCompName] = useState(checkStage());

  // 播放背景音乐
  const playAudio = () => {
    const audio = document.getElementById('bgAudio');
    audio.play();
  };

  const nextPage = (compName) => {
    console.log('nextPage', compName);
    setCompName(compName);
  };

  const renderComp = () => {
    switch (CompName) {
      case 'introduction':
        setComp(<Introduction nextPage={(page) => nextPage(page)} />);
        break;
      case 'questions':
        setComp(
          <Questions
            nextPage={(result) => {
              setSelectedStr(result);
              nextPage('result');
            }}
          />
        );
        break;
      case 'result':
        setComp(<Result selected={selectedStr} nextPage={() => nextPage('invitation')} />);
        break;
      case 'invitation':
        setComp(<Invitation nextPage={() => nextPage('live')} backPage={() => nextPage('result')} />);
        break;
      case 'live':
        setComp(<Live backPage={() => nextPage('invitation')} />);
        break;

      default:
        setComp(
          <Welcome
            nextPage={() => {
              playAudio();
              nextPage('introduction');
            }}
          />
        );
        break;
    }
  };

  useEffect(() => {
    renderComp();
  }, [CompName]);

  return (
    <div className={`${isMobile ? 'is-mobile' : 'is-pc'}`}>
      <Suspense fallback={''}>{Comp}</Suspense>
      <div className="load-font">font</div>
      <audio src={require(`@static/music/bgm.mp3`).default} controls="controls" preload="true" id="bgAudio" hidden></audio>
    </div>
  );
};

export default App;
