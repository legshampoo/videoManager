import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  UPLOAD_VIDEO_SUCCESS,
  UPLOAD_VIDEO_FAIL,
  ADD_DEVICE_SUCCESS,
  ADD_DEVICE_FAIL,
  GET_DEVICES_SUCCESS,
  GET_DEVICES_FAIL,
  GET_DEVICE_INFO_SUCCESS,
  GET_DEVICE_INFO_FAIL,
  GET_USER_MEDIA_SUCCESS,
  GET_USER_MEDIA_FAIL,
  UPDATE_DEVICE_SUCCESS,
  UPDATE_DEVICE_FAIL
} from '../actions/userActions';

const initialState = {
  authorized: false
}

function userReducer(state = initialState, action){

  switch(action.type){

    case USER_LOGIN_SUCCESS:
      console.log(action);

      return Object.assign({}, state, {
        authorized: action.payload.data.authorized,
        data: action.payload.data.user
      });

    case USER_LOGIN_FAIL:
      console.log(action);
      return state

    case USER_REGISTER_SUCCESS:
      console.log(action);

      return {
        ...state,
        authorized: action.payload.data.authorized,
        data: action.payload.data.user
      }

    case USER_REGISTER_FAIL:
      console.log(action);
      return state

    case USER_LOGOUT_SUCCESS:
      console.log(action);
      return {
        ...state,
        authorized: action.payload.data.authorized,
        data: {}
      }

    case USER_LOGOUT_FAIL:
      console.log(action);
      return state

    case UPLOAD_VIDEO_SUCCESS:
      console.log(action);
    return state

    case UPLOAD_VIDEO_FAIL:
      console.log(action);
    return state

    case ADD_DEVICE_SUCCESS:
      console.log(action);

      return {
        ...state,
        data: action.payload.data.user,
        devices: action.payload.data.devices
      }

    case ADD_DEVICE_FAIL:
      console.log(action);
    return state

    case GET_DEVICES_SUCCESS:
      console.log(action);

      return {
        ...state,
        devices: action.payload.data.devices
      }

    case GET_DEVICES_FAIL:
      console.log(action);
      return state

    case GET_DEVICE_INFO_SUCCESS:
      console.log(action);
      // var uuid = action.payload.data.uuid;

      return {
        ...state,
        currentDevice: action.payload.data.data
      }

    case GET_DEVICES_FAIL:
      console.log(action);
      return state

    case GET_USER_MEDIA_SUCCESS:
      console.log(action);

      return {
        ...state,
        media: action.payload.data.media
      }

    case GET_USER_MEDIA_FAIL:
      console.log(action);
      return state

    case UPDATE_DEVICE_SUCCESS:
      console.log(action);
      return {
        ...state,
        currentDevice: action.payload.data.device
      }

    case UPDATE_DEVICE_FAIL:
      console.log(action);
      return state

    default:
      return state
  }
}

export default userReducer;
