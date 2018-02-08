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
export const GET_DEVICE_INFO = 'GET_DEVICE_INFO';
export const GET_DEVICE_INFO_SUCCESS = 'GET_DEVICE_INFO_SUCCESS';
export const GET_DEVICE_INFO_FAIL = 'GET_DEVICE_INFO_FAIL';
export const GET_USER_MEDIA = 'GET_USER_MEDIA';
export const GET_USER_MEDIA_SUCCESS = 'GET_USER_MEDIA_SUCCESS';
export const GET_USER_MEDIA_FAIL = 'GET_USER_MEDIA_FAIL';
export const UPDATE_DEVICE = 'UPDATE_DEVICE';
export const UPDATE_DEVICE_SUCCESS = 'UPDATE_DEVICE_SUCCESS';
export const UPDATE_DEVICE_FAIL = 'UPDATE_DEVICE_FAIL';
export const DELETE_CONTENT = 'DELETE_CONTENT';
export const DELETE_CONTENT_SUCCESS = 'DELETE_CONTENT_SUCCESS';
export const DELETE_CONTENT_FAIL = 'DELETE_CONTENT_FAIL';

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

export function getDeviceInfo(values){
  console.log('DISPATCH: ', GET_DEVICE_INFO);

  return {
    type: GET_DEVICE_INFO,
    payload: values
  }
}

export function getUserMedia(values){
  console.log('DISPATCH: ', GET_USER_MEDIA);

  return {
    type: GET_USER_MEDIA,
    payload: values
  }
}

export function updateDevice(values){
  console.log('DISPATCH: ', UPDATE_DEVICE);

  return {
    type: UPDATE_DEVICE,
    payload: values
  }
}

export function deleteContent(values){
  console.log('DISPATCH: ', DELETE_CONTENT);

  return {
    type: DELETE_CONTENT,
    payload: values
  }
}
