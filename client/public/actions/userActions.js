export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_REGISTER = 'USER_REGISTER';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAIL = 'USER_LOGOUT_FAIL';
export const UPLOAD_VIDEO = 'UPLOAD_VIDEO';
export const UPLOAD_VIDEO_SUCCESS = 'UPLOAD_VIDEO_SUCCESS';
export const UPLOAD_VIDEO_FAIL = 'UPLOAD_VIDEO_FAIL';
export const ADD_DEVICE = 'ADD_DEVICE';
export const ADD_DEVICE_SUCCESS = 'ADD_DEVICE_SUCCESS';
export const ADD_DEVICE_FAIL = 'ADD_DEVICE_FAIL';
export const GET_DEVICES = 'GET_DEVICES';
export const GET_DEVICES_SUCCESS = 'GET_DEVICES_SUCCESS';
export const GET_DEVICES_FAIL = 'GET_DEVICES_FAIL';

export function userLogin(values){
  console.log('DISPATCH: ', USER_LOGIN);
  return {
    type: USER_LOGIN,
    payload: values
  }
}

export function userRegister(values){
  console.log('DISPATCH: ', USER_REGISTER);

  return {
    type: USER_REGISTER,
    payload: values
  }
}

export function userLogout(values){
  console.log('DISPATCH: ', USER_LOGOUT);

  return {
    type: USER_LOGOUT,
    payload: values
  }
}

export function uploadVideo(values){
  console.log('DISPATCH: ', UPLOAD_VIDEO);

  return {
    type: UPLOAD_VIDEO,
    payload: values
  }
}

export function addDevice(values){
  console.log('DISPATCH: ', ADD_DEVICE);

  return {
    type: ADD_DEVICE,
    payload: values
  }
}

export function getDevices(values){
  console.log('DISPATCH: ', GET_DEVICES);

  return {
    type: GET_DEVICES,
    payload: values
  }
}
