import React, { Suspense, useEffect, useState } from 'react';
import './app.less';

const emptyComp = <div></div>;
const Welcome = React.lazy(() => import('@pages/welcome/index.jsx'));
const Introduction = React.lazy(() => import('@pages/introduction/index.jsx'));
const Questions = React.lazy(() => import('@pages/questions/index.jsx'));
const Result = React.lazy(() => import('@pages/result/index.jsx'));
const Invitation = React.lazy(() => import('@pages/invitation/index.jsx'));
const PreLive = React.lazy(() => import('@pages/pre-live/index.jsx'));

const App = () => {
  const [Comp, setComp] = useState(emptyComp);
  const [selectedStr, setSelectedStr] = useState('');
  const [CompName, setCompName] = useState('welcome');

  const ogg = require('@static/music/bgm.mp3').default;
  const audio = new Audio(ogg);

  // 播放背景音乐
  const playAudio = () => {
    audio.play();
  };

  const nextPage = (compName) => {
    console.log('nextPage', compName);
    setCompName(compName);
  };

  const renderComp = () => {
    switch (CompName) {
      case 'introduction':
        setComp(<Introduction nextPage={() => nextPage('questions')} />);
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
        setComp(<Result selected={selectedStr} nextPage={() => nextPage()} />);
        break;
      case 'invitation':
        setComp(<Invitation nextPage={() => nextPage()} />);
        break;
      case 'pre-live':
        setComp(<PreLive nextPage={() => nextPage('welcome')} />);
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
    <>
      <Suspense fallback={''}>{Comp}</Suspense>
      <div className="load-font">font</div>
    </>
  );
};

export default App;
