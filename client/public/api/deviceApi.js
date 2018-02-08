import axios from 'axios';

export const requestNewUUID = async (payload) => {
  const url = '/api/device/request-new-uuid'

  return new Promise((fulfill, reject) => {
    axios.post(url, payload)
    .then(res => {
      fulfill(res);
    })
    .catch(err => {
      reject(err);
    })
  })
}

export const getDeviceInfo = async (payload) => {
  const url = '/api/device/get-device-info'

  return new Promise((fulfill, reject) => {
    axios.post(url, payload)
    .then(res => {
      fulfill(res);
    })
    .catch(err => {
      reject(err);
    })
  })
}

export const checkUUIDExists = async (payload) => {
  const url = '/api/device/check-uuid-exists'

  return new Promise((fulfill, reject) => {
    axios.post(url, payload)
    .then(res => {
      fulfill(res);
    })
    .catch(err => {
      reject(err);
    })
  })
}
