import React from 'react'

import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import SocketIOClient from "socket.io-client";

import App from '../pages/login'
import Chat from '../pages/chat'
import Page404 from '../pages/page404'

const socketIOClient = SocketIOClient("http://127.0.0.1:4001");

const reconnectingEvent = () => {
  let tries = 0;
  
  socketIOClient.on('reconnecting', () => {     
    tries++; 
    if (tries === 3) {//Caso o servidor esteja offline, tentará se conectar até três vezes
      socketIOClient.disconnect();
    }    
  });
}

const Routes = () => {
  reconnectingEvent();

  return (  
    <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={() => (<App socketIOClient = {socketIOClient}/>)}/>
          <Route path="/chat" component={() => (<Chat socketIOClient = {socketIOClient}/>)}/>
          <Route path="*" component={Page404}/>
        </Switch>          
    </BrowserRouter>
)}

export default Routes
