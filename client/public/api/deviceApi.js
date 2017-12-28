import axios from 'axios';

export const requestNewUUID = async (payload) => {
  console.log('post: /api/request-new-uuid');

  const url = '/api/request-new-uuid'

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
