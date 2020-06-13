import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/login'
import Chat from './pages/chat'
import Page404 from './pages/page404'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route  } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App}/>
      <Route path="/chat" component={Chat}/>
      <Route path="*" component={Page404}/>
    </Switch>          
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
