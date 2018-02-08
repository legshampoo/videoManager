import {
  REQUEST_NEW_UUID_SUCCESS,
  REQUEST_NEW_UUID_FAIL,
  UPDATE_UUID,
  DEVICE_GET_DEVICE_INFO_SUCCESS,
  DEVICE_GET_DEVICE_INFO_FAIL,
  CHECK_UUID_EXISTS_SUCCESS,
  CHECK_UUID_EXISTS_FAIL
} from '../actions/deviceActions';

import {
  saveUUID
} from '../utils/deviceUtils';

const initialState = {
  deviceCheck: false
}

function deviceReducer(state = initialState, action){
  switch(action.type){

    case REQUEST_NEW_UUID_SUCCESS:
      console.log(action);
      const uuid = action.payload.data.uuid;

      // saveIdToLocalStorage(uuid);
      localStorage.setItem('uuid', uuid);

      return {
        ...state,
        uuid: uuid
      }

    case REQUEST_NEW_UUID_FAIL:
      console.log(action);
      return state

    case CHECK_UUID_EXISTS_SUCCESS:
      console.log(action);
      return {
        ...state,
        deviceFound: action.payload.data.device_found,
        uuid: action.payload.data.uuid,
        deviceCheck: true
      }

    case CHECK_UUID_EXISTS_FAIL:
      console.log(action);
      return state

    case UPDATE_UUID:
      console.log(action);

      const savedUUID = action.payload;

      return Object.assign({}, state, {
        uuid: savedUUID
      })

    case DEVICE_GET_DEVICE_INFO_SUCCESS:
      console.log(action);
      return {
        ...state,
        data: action.payload.data.data
      }

    case DEVICE_GET_DEVICE_INFO_FAIL:
      console.log(action);
      return state

    default:
      return state
  }
}

export default deviceReducer;
