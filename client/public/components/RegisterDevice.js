import React, { Component } from 'react';
// import styles from '../css/app.css';
import axios from 'axios';

class RegisterDevice extends Component {
  constructor(props){
    super(props);

    this.state = {
      uuid: ''
    };
  }

  componentDidMount(){
    this.checkUUID();
  }

  checkUUID(){
    console.log('One last check for UUID before creating a new one');

    var uuid = localStorage.getItem('uuid');

    console.log('the uuid is: ', uuid);

    if(uuid == null || uuid == undefined || uuid == ''){
      console.log('creat uuid here');

      axios.post('/api/assign-device-uuid', {
        testData: 'data-here'
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })

    }else{
      console.log('uuid actually exists, handle it here');
    }
  }

  render(){
    return (
      <div>
        Register Device
      </div>)
  }
}

export default RegisterDevice;
