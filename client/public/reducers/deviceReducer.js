import {
  REQUEST_NEW_UUID_SUCCESS,
  REQUEST_NEW_UUID_FAIL,
  UPDATE_UUID
} from '../actions/deviceActions';

import {
  saveUUID
} from '../utils/deviceUtils';

const initialState = {

}

function deviceReducer(state = initialState, action){
  switch(action.type){

    case REQUEST_NEW_UUID_SUCCESS:
      console.log(action);
      const uuid = action.payload.data.uuid;

      saveUUID(uuid);

      return Object.assign({}, state, {
        uuid: uuid
      });

    case REQUEST_NEW_UUID_FAIL:
      console.log(action);
      return state

    case UPDATE_UUID:
      console.log(action);

      const savedUUID = action.payload;

      return Object.assign({}, state, {
        uuid: savedUUID
      })

    default:
      return state
  }
}

export default deviceReducer;
