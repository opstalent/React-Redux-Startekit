import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>
  , document.getElementById('app'));
};

render();

/* global module */
if (module.hot) {
  module.hot.accept('App', render);
}
