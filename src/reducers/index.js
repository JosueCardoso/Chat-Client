import { appStateReducer } from './appStateReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  appState: appStateReducer
});