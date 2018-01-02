import 'regenerator-runtime/runtime';

import {
  put,
  takeEvery,
  all
} from 'redux-saga/effects';

import deviceSagas from './deviceSagas';
import userSagas from './userSagas';

export default function* rootSaga(){
  yield all([
    deviceSagas(),
    userSagas()
  ])
}
