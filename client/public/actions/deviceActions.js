export const REQUEST_NEW_UUID = 'REQUEST_NEW_UUID';
export const REQUEST_NEW_UUID_SUCCESS = 'REQUEST_NEW_UUID_SUCCESS';
export const REQUEST_NEW_UUID_FAIL = 'REQUEST_NEW_UUID_FAIL';
export const UPDATE_UUID = 'UPDATE_UUID';

export function requestUUID(values){
  console.log('DISPATCH: ', REQUEST_NEW_UUID);
  return {
    type: REQUEST_NEW_UUID,
    payload: values
  }
}

//take uuid from localStorage and set redux state
export function updateUUID(values){
  console.log('DISPATCH: ', UPDATE_UUID);
  return {
    type: UPDATE_UUID,
    payload: values
  }
}
