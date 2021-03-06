import {
  call,
  put,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';

import {
  requestNewUUID,
  getDeviceInfo,
  checkUUIDExists
} from '../api/deviceApi';

import {
  REQUEST_NEW_UUID,
  REQUEST_NEW_UUID_SUCCESS,
  REQUEST_NEW_UUID_FAIL,
  DEVICE_GET_DEVICE_INFO,
  DEVICE_GET_DEVICE_INFO_SUCCESS,
  DEVICE_GET_DEVICE_INFO_FAIL,
  CHECK_UUID_EXISTS,
  CHECK_UUID_EXISTS_SUCCESS,
  CHECK_UUID_EXISTS_FAIL
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

function * get_device_info(action){
  try{
    const response = yield call(getDeviceInfo, action.payload);
    yield put({
      type: DEVICE_GET_DEVICE_INFO_SUCCESS,
      payload: response
    });
  }catch(e){
    yield put({
      type: DEVICE_GET_DEVICE_INFO_FAIL,
      payload: response
    });
  }
}

function * check_uuid_exists(action){
  try{
    const response = yield call(checkUUIDExists, action.payload);
    yield put({
      type: CHECK_UUID_EXISTS_SUCCESS,
      payload: response
    });
  }catch(e){
    yield put({
      type: CHECK_UUID_EXISTS_FAIL,
      payload: response
    });
  }
}

function * sagas(){
  yield takeEvery('REQUEST_NEW_UUID', request_new_uuid);
  yield takeEvery('DEVICE_GET_DEVICE_INFO', get_device_info);
  yield takeEvery('CHECK_UUID_EXISTS', check_uuid_exists);
}

export default sagas;
