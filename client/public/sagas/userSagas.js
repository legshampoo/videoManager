import {
  call,
  put,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';

import {
  userLogin,
  userLogout,
  userRegister,
  uploadVideo,
  addDevice
} from '../api/userApi';

import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  UPLOAD_VIDEO,
  UPLOAD_VIDEO_SUCCESS,
  UPLOAD_VIDEO_FAIL,
  ADD_DEVICE,
  ADD_DEVICE_SUCCESS,
  ADD_DEVICE_FAIL
} from '../actions/userActions';

function * user_login(action){
  try{
    const response = yield call(userLogin, action.payload);
    yield put({
      type: USER_LOGIN_SUCCESS,
      payload: response
    });
  }catch(e){
    yield put({
      type: USER_LOGIN_FAIL,
      payload: e
    });
  }
}

function * user_register(action){
  try{
    const response = yield call(userRegister, action.payload);
    yield put({
      type: USER_REGISTER_SUCCESS,
      payload: response
    });
  }catch(e){
    yield put({
      type: USER_REGISTER_FAIL,
      payload: e
    });
  }
}

function * user_logout(action){
  try{
    const response = yield call(userLogout, action.payload);
    yield put({
      type: USER_LOGOUT_SUCCESS,
      payload: response
    });
  }catch(e){
    yield put({
      type: USER_LOGOUT_FAIL,
      payload: e
    });
  }
}

function * upload_video(action){
  try{
    const response = yield call(uploadVideo, action.payload);
    yield put({
      type: UPLOAD_VIDEO_SUCCESS,
      payload: response
    });
  }catch(e){
    yield put({
      type: UPLOAD_VIDEO_FAIL,
      payload: e
    });
  }
}

function * add_device(action){
  try{
    const response = yield call(addDevice, action.payload);
    yield put({
      type: ADD_DEVICE_SUCCESS,
      payload: response
    });
  }catch(e){
    yield put({
      type: ADD_DEVICE_FAIL,
      payload: e
    });
  }
}

function * sagas(){
  yield takeEvery('USER_LOGIN', user_login);
  yield takeEvery('USER_REGISTER', user_register);
  yield takeEvery('USER_LOGOUT', user_logout);
  yield takeEvery('UPLOAD_VIDEO', upload_video);
  yield takeEvery('ADD_DEVICE', add_device);
}

export default sagas;