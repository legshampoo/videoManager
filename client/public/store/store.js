import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from 'react-router-redux'

import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/index';
import rootSaga from '../sagas/index';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

var socketOptions = {
  reconnection: true,
  reconnectionDelay: 5000,
  reconnectionDelayMax: 30000,
  reconnectionAttempts: Infinity
}

let socket = io(socketOptions);
let socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(socketIoMiddleware),
  applyMiddleware(routerMiddleware(history)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

//for redux dev tools, pass enhancers into store
const store = createStore(
  rootReducer,
  enhancers
);

//then run the saga
sagaMiddleware.run(rootSaga);

export default store;
