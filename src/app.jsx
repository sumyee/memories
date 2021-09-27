import React from "react";
import Router from "./router";

import "./app.less";

// const App = () => {
//   return <Router></Router>;
// };
class App extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return <Router></Router>;
  }
}

export default App;
