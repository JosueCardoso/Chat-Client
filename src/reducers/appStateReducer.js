import { CONNECTION_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
    isConnected: true
  };

  export const appStateReducer = (state = initialState, action) => {    
    switch (action.type) {
      case CONNECTION_UPDATE_VALUE:   
        return {
          ...state,
          isConnected: action.isConnected
        };
      default:
        return state;
    }
  };