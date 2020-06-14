import { CONNECTION_UPDATE_VALUE } from './actionTypes';

export const setConnected = value =>  ({
    type: CONNECTION_UPDATE_VALUE,
    isConnected: value
  });