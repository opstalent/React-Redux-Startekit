import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Home from 'components/Home';
import store from "store/store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
