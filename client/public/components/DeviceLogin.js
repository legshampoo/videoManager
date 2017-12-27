import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

class DeviceLogin extends Component {
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
    console.log('Checking device for UUID');

    var uuid = localStorage.getItem('uuid');

    if(uuid == null || uuid == undefined || uuid == ''){
      console.log('No UUID found, redirecting to register device page');
      this.props.history.push('/device-register');
    }else{
      console.log('uuid has been detected');
    }
  }

  render(){
    return (
      <div>
        Device Login
      </div>)
  }
}

export default DeviceLogin;
