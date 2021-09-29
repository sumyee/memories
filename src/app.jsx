import React, { Suspense, useEffect, useState } from 'react';
import './app.less';

const emptyComp = <div></div>;
const Welcome = React.lazy(() => import('@pages/welcome/index.jsx'));
const Introduction = React.lazy(() => import('@pages/introduction/index.jsx'));
const Questions = React.lazy(() => import('@pages/questions/index.jsx'));
const Invitation = React.lazy(() => import('@pages/invitation/index.jsx'));
const PreLive = React.lazy(() => import('@pages/pre-live/index.jsx'));

const App = () => {
  const [Comp, setComp] = useState(emptyComp);
  const [CompName, setCompName] = useState('questions');

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
        setComp(<Questions nextPage={() => nextPage()} />);
        break;
      case 'invitation':
        setComp(<Invitation nextPage={() => nextPage()} />);
        break;
      case 'pre-live':
        setComp(<PreLive nextPage={() => nextPage('welcome')} />);
        break;

      default:
        setComp(<Welcome nextPage={() => nextPage('introduction')} />);
        break;
    }
  };

  useEffect(() => {
    renderComp();
  }, [CompName]);

  return <Suspense fallback={''}>{Comp}</Suspense>;
};

export default App;
