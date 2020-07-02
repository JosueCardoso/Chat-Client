import { CONNECTION_UPDATE_VALUE, AUTHENTICATION_UPDATE_VALUE, USER_CONNECTED_UPDATE_VALUE } from './actionTypes';

export const setConnected = value =>  ({
    type: CONNECTION_UPDATE_VALUE,
    isConnected: value
  });

  export const setAuthenticated = value =>  ({
    type: AUTHENTICATION_UPDATE_VALUE,
    isAuthenticated: value
  });

  export const setUserConnected = value => ({
    type: USER_CONNECTED_UPDATE_VALUE,
    userConnected: value
  })