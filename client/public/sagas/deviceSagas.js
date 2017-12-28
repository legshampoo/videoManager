import {
  call,
  put,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';

import {
  requestNewUUID
} from '../api/deviceApi';

import {
  REQUEST_NEW_UUID,
  REQUEST_NEW_UUID_SUCCESS,
  REQUEST_NEW_UUID_FAIL
} from '../actions/deviceActions';

function * request_new_uuid(action){
  try{
    const response = yield call(requestNewUUID, action.payload);
    yield put({
      type: REQUEST_NEW_UUID_SUCCESS,
      payload: response
    });
  }catch(e){
    yield put({
      type: REQUEST_NEW_UUID_FAIL,
      payload: response
    });
  }
}

function * sagas(){
  yield takeEvery('REQUEST_NEW_UUID', request_new_uuid);
}

export default sagas;
