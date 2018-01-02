import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import deviceReducer from './deviceReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  device: deviceReducer,
  user: userReducer
});

export default rootReducer;
