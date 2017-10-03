import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import store from "./store.js";
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
    ,document.getElementById('app'));
