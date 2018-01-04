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
  ADD_DEVICE_FAIL
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
    return state

    case ADD_DEVICE_FAIL:
      console.log(action);
    return state

    default:
      return state
  }
}

export default userReducer;
