import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import deviceReducer from './deviceReducer';

const rootReducer = combineReducers({
  device: deviceReducer
});

export default rootReducer;
