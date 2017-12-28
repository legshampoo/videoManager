


//after making a request-new-uuid
//save the uuid to localStorage
export const saveUUID = (uuid) => {
  console.log('SAVING UUID TO LOCAL STORAGE: ', uuid);

  var prevUUID = localStorage.getItem('uuid');

  if(prevUUID == null || prevUUID == 'null' || prevUUID == undefined || prevUUID == ''){
    localStorage.setItem('uuid', uuid);
  }else{
    console.log('UUID REJECTED, THERE IS ALREADY A UUID IN PLACE');
  }
}
