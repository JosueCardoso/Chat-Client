import React, { useEffect } from 'react'

import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom'
import SocketIOClient from "socket.io-client";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '../pages/login'
import Chat from '../pages/chat'
import Page404 from '../pages/page404'
import { setConnected } from '../actions';

const isAuthenticated = () => false; //TODO: Alterar para consultar no banco
const socketIOClient = SocketIOClient("http://127.0.0.1:4001");

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest} 
    render={props =>
      isAuthenticated() ? (<Component {...props}/>) : (<Redirect to={{pathname: "/", state: {from: props.location}}}/>)
    }
  />
)

const Routes = ({setConnected}) => {
  const reconnectingEvent = () => {
    let tries = 0;
    
    socketIOClient.on('reconnecting', () => {   
      setConnected(false);

      tries++; 
      if (tries === 3) {//Caso o servidor esteja offline, tentará se conectar até três vezes
        socketIOClient.disconnect(); 
      }    
    });

    socketIOClient.on('connectionStatus', (response) => {   
      if(response === "CLIENT_CONNECTED"){
        setConnected(true);
        tries = 0;
      }      
    });
  }
  
  useEffect(() => {
    reconnectingEvent();
  });

  return (  
    <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={() => (<App socketIOClient = {socketIOClient}/>)}/>
          <PrivateRoute path="/chat" component={() => (<Chat socketIOClient = {socketIOClient}/>)}/>
          <Route path="*" component={Page404}/>
        </Switch>          
    </BrowserRouter>
)}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setConnected }, dispatch);

export default connect(null, mapDispatchToProps)(Routes);
