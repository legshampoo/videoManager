import axios from 'axios';

export const userLogin = async (payload) => {
  const url = '/api/user/login';

  console.log('post: ', url);

  return new Promise((fulfill, reject) => {
    axios.post(url, payload)
    .then(res => {
      if(!res.data.authorized){
        reject(res);
      }else{
        fulfill(res);
      }
    })
    .catch(err => {
      reject(err);
    })
  })
}

export const userRegister = async (payload) => {
  const url = '/api/user/register';

  console.log('post: ', url);

  return new Promise((fulfill, reject) => {
    axios.post(url, payload)
    .then(res => {
      if(res.data.api.error){
        reject(res);
        return
      }

      fulfill(res);
    })
    .catch(err => {
      reject(err);
    })
  })
}

export const userLogout = async (payload) => {
  const url = '/api/user/logout';

  console.log('post: ', url);

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

export const uploadVideo = async (payload) => {
  const url = '/api/user/upload/video';

  console.log('post: ', url);

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

export const addDevice = async (payload) => {
  const url = '/api/user/add-device';

  console.log('post: ', url);

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

export const getDevices = async (payload) => {
  const url = '/api/user/get-devices';

  console.log('post: ', url);

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
  const url = '/api/user/get-device-info';

  console.log('post: ', url);

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

export const getUserMedia = async (payload) => {
  const url = '/api/user/get-user-media';

  console.log('post: ', url);

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

export const updateDevice = async (payload) => {
  const url = '/api/user/update-device';

  console.log('post: ', url);

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
