import React, { useEffect } from 'react'

import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom'
import SocketIOClient from "socket.io-client";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '../pages/login'
import Chat from '../pages/chat'
import Page404 from '../pages/page404'
import { setConnected } from '../actions';


const socketIOClient = SocketIOClient("http://127.0.0.1:4001");

let PrivateRoute = ({component: Component, isAuthenticated: IsAuthenticated, ...rest}) => (
  <Route
    {...rest} 
    render={props =>
      IsAuthenticated ? (<Component {...props}/>) : (<Redirect to={{pathname: "/", state: {from: props.location}}}/>)
    }
  />
)

const Routes = ({setConnected, isAuthenticated}) => {
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
  }, []);

  return (  
    <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={() => (<App socketIOClient = {socketIOClient}/>)}/>
          <PrivateRoute path="/chat" isAuthenticated={isAuthenticated} component={() => (<Chat socketIOClient = {socketIOClient}/>)}/>
          <Route path="*" component={Page404}/>
        </Switch>          
    </BrowserRouter>
)}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setConnected }, dispatch);

const mapStateToProps = store => ({
  isAuthenticated: store.appState.isAuthenticated
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
