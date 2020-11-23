import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./SignIn.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

