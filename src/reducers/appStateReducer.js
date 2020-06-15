import { CONNECTION_UPDATE_VALUE, AUTHENTICATION_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
    isConnected: true,
    isAuthenticated: false
};

  export const appStateReducer = (state = initialState, action) => {    
    switch (action.type) {
      case CONNECTION_UPDATE_VALUE:   
        return {
          ...state,
          isConnected: action.isConnected
        };
      case AUTHENTICATION_UPDATE_VALUE:   
        return {
          ...state,
          isAuthenticated: action.isAuthenticated
        };
      default:
        return state;
    }
  };