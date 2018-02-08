import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import deviceReducer from './deviceReducer';
import userReducer from './userReducer';
import socketReducer from './socketReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  device: deviceReducer,
  user: userReducer,
  sockets: socketReducer
});

export default rootReducer;
