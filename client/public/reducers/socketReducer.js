const store = require('../store/store');
import { push } from 'react-router-redux';
const initialState = {};

function socketReducer(state = initialState, action){
  switch(action.type){

    case 'server-heartbeat':
      // console.log(action);
      return {
        ...state,
        heartbeats: {
          ...state.heartbeats,
          server: {
            ...state.heartbeats.server,
            status: action.payload.status,
            last_heartbeat: action.payload.time
          }
        }
      }

    case 'device-heartbeat':
      // console.log(action);
      var device_id = action.payload.device_id;
      var status = action.payload.status;

      return {
        ...state,
        heartbeats: {
          ...state.heartbeats,
          [device_id]: status
        }
      }

    case 'device-heartbeat-dead':
      console.log(action);
      var device_id = action.payload.device_id;
      var status = action.payload.status;

      return {
        ...state,
        heartbeats: {
          [device_id]: status
        }
      }

    case 'refresh':
      console.log(action);
      console.log('STORE: ', store);
      store.history.push('/device/login');
      window.location.reload()
      return state

    default:
      return state
  }
}

export default socketReducer;
